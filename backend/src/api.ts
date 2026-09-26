import {
  applicationExists,
  createApplication,
  createInternship,
  deleteInternship,
  findActiveInternshipById,
  findInternshipBySlug,
  getEmployer,
  listApplicationsByInternship,
  listDatasetOptions,
  listInternships,
  updateApplicationStatus,
  updateEmployer,
  updateInternship,
  type InternshipInput,
} from "./internship-db";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function list(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* =========================================================
   INTERNSHIPS
========================================================= */

export async function getInternshipsResponse(): Promise<Response> {
  try {
    return Response.json(await listInternships());
  } catch (error) {
    console.error("GET /api/internships failed:", error);

    return Response.json(
      { error: "Unable to load internships" },
      { status: 500 },
    );
  }
}

export async function postInternshipResponse(
  request: Request,
): Promise<Response> {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const title = text(body.title);
    const company = text(body.company);
    const location = text(body.location);
    const workMode = text(body.workMode);
    const stipend = text(body.stipend);
    const duration = text(body.duration);
    const applyBy = text(body.applyBy);
    const category = text(body.category);
    const description = text(body.description);

    if (
      !title ||
      !company ||
      !location ||
      !["Remote", "On-site", "Hybrid"].includes(workMode) ||
      !stipend ||
      !duration ||
      !applyBy ||
      !category ||
      !description
    ) {
      return Response.json(
        {
          error: "Required internship fields are missing or invalid",
        },
        { status: 400 },
      );
    }

    const suffix = crypto.randomUUID().slice(0, 6);

    const internship: InternshipInput = {
      slug:
        text(body.slug) ||
        `${slugify(title)}-${slugify(company)}-${suffix}`,

      title,
      company,
      location,

      workMode: workMode as InternshipInput["workMode"],

      stipend,
      duration,

      posted: text(body.posted) || "Today",

      applyBy,
      category,
      description,

      skills: list(body.skills),

      responsibilities: list(body.responsibilities),

      requirements: list(body.requirements),

      perks: list(body.perks),
    };

    const created = await createInternship(internship);

    return Response.json(created, {
      status: 201,
    });
  } catch (error) {
    console.error("POST /api/internships failed:", error);

    return Response.json(
      {
        error: "Unable to create internship",
      },
      { status: 500 },
    );
  }
}

export async function getInternshipResponse(
  slug: string,
): Promise<Response> {
  try {
    const internship = await findInternshipBySlug(slug);

    if (!internship) {
      return Response.json(
        {
          error: "Internship not found",
        },
        { status: 404 },
      );
    }

    return Response.json(internship);
  } catch (error) {
    console.error("GET internship failed:", error);

    return Response.json(
      {
        error: "Unable to load internship",
      },
      { status: 500 },
    );
  }
}

const editableFields: Array<keyof InternshipInput> = [
  "title",
  "company",
  "location",
  "workMode",
  "stipend",
  "duration",
  "posted",
  "applyBy",
  "category",
  "description",
  "skills",
  "responsibilities",
  "requirements",
  "perks",
];

export async function patchInternshipResponse(
  request: Request,
  slug: string,
): Promise<Response> {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const updates: Partial<InternshipInput> = {};

    for (const field of editableFields) {
      if (body[field] !== undefined) {
        Object.assign(updates, {
          [field]: body[field],
        });
      }
    }

    if (
      updates.workMode &&
      !["Remote", "On-site", "Hybrid"].includes(updates.workMode)
    ) {
      return Response.json(
        {
          error: "Invalid work mode",
        },
        { status: 400 },
      );
    }

    const internship = await updateInternship(
      slug,
      updates,
    );

    if (!internship) {
      return Response.json(
        {
          error: "Internship not found",
        },
        { status: 404 },
      );
    }

    return Response.json(internship);
  } catch (error) {
    console.error("PATCH internship failed:", error);

    return Response.json(
      {
        error: "Unable to update internship",
      },
      { status: 500 },
    );
  }
}

export async function deleteInternshipResponse(
  slug: string,
): Promise<Response> {
  try {
    const deleted = await deleteInternship(slug);

    if (!deleted) {
      return Response.json(
        {
          error: "Internship not found",
        },
        { status: 404 },
      );
    }

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.error("DELETE internship failed:", error);

    return Response.json(
      {
        error: "Unable to delete internship",
      },
      { status: 500 },
    );
  }
}

/* =========================================================
   APPLICATIONS
========================================================= */
export async function getApplicationsResponse(
  internshipId: number,
): Promise<Response> {
  try {
    if (
      !Number.isInteger(internshipId) ||
      internshipId <= 0
    ) {
      return Response.json(
        {
          error: "Invalid internship id",
        },
        {
          status: 400,
        },
      );
    }

    const applications =
      await listApplicationsByInternship(
        internshipId,
      );

    return Response.json(applications);
  } catch (error) {
    console.error(
      "GET applications failed:",
      error,
    );

    return Response.json(
      {
        error:
          "Unable to load applications",
      },
      {
        status: 500,
      },
    );
  }
}
export async function postApplicationResponse(
  request: Request,
): Promise<Response> {
  try {
    const body = (await request.json()) as Record<
      string,
      unknown
    >;

    const internshipId = Number(body.internshipId);
    const fullName = text(body.fullName);
    const email = text(body.email).toLowerCase();
    const resumeUrl = text(body.resumeUrl);
    const coverLetter = text(body.coverLetter);

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    let resumeUrlIsValid = false;
    try {
      const parsed = new URL(resumeUrl);
      resumeUrlIsValid = parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      resumeUrlIsValid = false;
    }

    if (
      !Number.isInteger(internshipId) ||
      internshipId <= 0 ||
      fullName.length < 2 ||
      fullName.length > 120 ||
      !emailIsValid ||
      email.length > 254 ||
      !resumeUrlIsValid ||
      resumeUrl.length > 2048 ||
      coverLetter.length < 20 ||
      coverLetter.length > 5000
    ) {
      return Response.json(
        {
          error: "Please provide a valid name, email, resume link, and cover letter.",
        },
        { status: 400 },
      );
    }

    const internship = await findActiveInternshipById(internshipId);
    if (!internship) {
      return Response.json(
        { error: "Internship is no longer available." },
        { status: 404 },
      );
    }

    if (await applicationExists(internshipId, email)) {
      return Response.json(
        { error: "You have already applied for this internship" },
        { status: 409 },
      );
    }

    const id = await createApplication({
      internshipId,
      fullName,
      email,
      resumeUrl,
      coverLetter,
    });

    return Response.json(
      {
        id,
        message:
          "Application submitted successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message.toLowerCase()
        : "";

    if (message.includes("unique")) {
      return Response.json(
        {
          error:
            "You have already applied for this internship",
        },
        {
          status: 409,
        },
      );
    }

    console.error(
      "POST application failed:",
      error,
    );

    return Response.json(
      {
        error: "Unable to submit application",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================================================
   APPLICATION STATUS
========================================================= */

const applicationStatuses = [
  "APPLIED",
  "SHORTLISTED",
  "ASSIGNMENT",
  "INTERVIEW",
  "SELECTED",
  "REJECTED",
];

export async function patchApplicationStatusResponse(
  request: Request,
  id: number,
): Promise<Response> {
  try {
    if (!Number.isInteger(id) || id <= 0) {
      return Response.json(
        {
          error: "Invalid application id",
        },
        {
          status: 400,
        },
      );
    }

    const body = (await request.json()) as Record<
      string,
      unknown
    >;

    const status = text(body.status).toUpperCase();

    const employerNote = text(
      body.employerNote,
    );

    if (!applicationStatuses.includes(status)) {
      return Response.json(
        {
          error:
            "Invalid application status",
        },
        {
          status: 400,
        },
      );
    }

    const application =
      await updateApplicationStatus(
        id,
        status,
        employerNote || undefined,
      );

    return Response.json(application);
  } catch (error) {
    console.error(
      "PATCH application status failed:",
      error,
    );

    return Response.json(
      {
        error:
          "Unable to update application status",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================================================
   EMPLOYER PROFILE
========================================================= */

export async function getEmployerResponse(
  id: number,
): Promise<Response> {
  try {
    if (!Number.isInteger(id) || id <= 0) {
      return Response.json(
        {
          error: "Invalid employer id",
        },
        {
          status: 400,
        },
      );
    }

    const employer = await getEmployer(id);

    if (!employer) {
      return Response.json(
        {
          error: "Employer not found",
        },
        {
          status: 404,
        },
      );
    }

    return Response.json(employer);
  } catch (error) {
    console.error(
      "GET employer failed:",
      error,
    );

    return Response.json(
      {
        error:
          "Unable to load employer profile",
      },
      {
        status: 500,
      },
    );
  }
}

export async function patchEmployerResponse(
  request: Request,
  id: number,
): Promise<Response> {
  try {
    if (!Number.isInteger(id) || id <= 0) {
      return Response.json(
        {
          error: "Invalid employer id",
        },
        {
          status: 400,
        },
      );
    }

    const body = (await request.json()) as Record<
      string,
      unknown
    >;

    const foundedYearValue = Number(
      body.foundedYear,
    );

    const employer = await updateEmployer(
      id,
      {
        name:
          text(body.name) || undefined,

        phone:
          text(body.phone) || undefined,

        companyName:
          text(body.companyName) ||
          undefined,

        companyWebsite:
          text(body.companyWebsite) ||
          undefined,

        companyDescription:
          text(body.companyDescription) ||
          undefined,

        companyLogoUrl:
          text(body.companyLogoUrl) ||
          undefined,

        industry:
          text(body.industry) ||
          undefined,

        companyType:
          text(body.companyType) ||
          undefined,

        companySize:
          text(body.companySize) ||
          undefined,

        foundedYear:
          Number.isInteger(
            foundedYearValue,
          ) &&
          foundedYearValue > 0
            ? foundedYearValue
            : undefined,

        address:
          text(body.address) ||
          undefined,

        city:
          text(body.city) ||
          undefined,

        state:
          text(body.state) ||
          undefined,

        country:
          text(body.country) ||
          undefined,

        linkedinUrl:
          text(body.linkedinUrl) ||
          undefined,

        gstNumber:
          text(body.gstNumber) ||
          undefined,

        cinNumber:
          text(body.cinNumber) ||
          undefined,
      },
    );

    return Response.json(employer);
  } catch (error) {
    console.error(
      "PATCH employer failed:",
      error,
    );

    return Response.json(
      {
        error:
          "Unable to update employer profile",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================================================
   DATASETS
========================================================= */

const allowedDatasetTypes = [
  "SKILL",
  "INDUSTRY",
  "LOCATION",
  "INTERNSHIP_CATEGORY",
  "COMPANY_TYPE",
  "COMPANY_SIZE",
  "QUALIFICATION",
];

export async function getDatasetResponse(
  request: Request,
): Promise<Response> {
  try {
    const url = new URL(request.url);

    const type =
      url.searchParams
        .get("type")
        ?.trim()
        .toUpperCase();

    if (!type) {
      return Response.json(
        {
          error:
            "Dataset type is required",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !allowedDatasetTypes.includes(type)
    ) {
      return Response.json(
        {
          error:
            "Invalid dataset type",
        },
        {
          status: 400,
        },
      );
    }

    const options =
      await listDatasetOptions(type);

    return Response.json(options);
  } catch (error) {
    console.error(
      "GET dataset failed:",
      error,
    );

    return Response.json(
      {
        error:
          "Unable to load dataset",
      },
      {
        status: 500,
      },
    );
  }
}