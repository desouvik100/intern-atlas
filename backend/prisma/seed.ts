import "dotenv/config";
import { PrismaClient } from "../generated/prisma-node/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

const datasets = [
  { type: "SKILL", value: "Java", slug: "java", sortOrder: 1 },
  { type: "SKILL", value: "Spring Boot", slug: "spring-boot", sortOrder: 2 },
  { type: "SKILL", value: "JavaScript", slug: "javascript", sortOrder: 3 },
  { type: "SKILL", value: "TypeScript", slug: "typescript", sortOrder: 4 },
  { type: "SKILL", value: "React", slug: "react", sortOrder: 5 },
  { type: "SKILL", value: "Next.js", slug: "nextjs", sortOrder: 6 },
  { type: "SKILL", value: "Node.js", slug: "nodejs", sortOrder: 7 },
  { type: "SKILL", value: "Python", slug: "python", sortOrder: 8 },
  { type: "SKILL", value: "SQL", slug: "sql", sortOrder: 9 },

  {
    type: "INDUSTRY",
    value: "Information Technology",
    slug: "information-technology",
    sortOrder: 1,
  },
  {
    type: "INDUSTRY",
    value: "Software Development",
    slug: "software-development",
    sortOrder: 2,
  },
  {
    type: "INDUSTRY",
    value: "Education",
    slug: "education",
    sortOrder: 3,
  },
  {
    type: "INDUSTRY",
    value: "Finance",
    slug: "finance",
    sortOrder: 4,
  },
  {
    type: "INDUSTRY",
    value: "Marketing",
    slug: "marketing",
    sortOrder: 5,
  },

  { type: "LOCATION", value: "Pune", slug: "pune", sortOrder: 1 },
  { type: "LOCATION", value: "Mumbai", slug: "mumbai", sortOrder: 2 },
  { type: "LOCATION", value: "Bengaluru", slug: "bengaluru", sortOrder: 3 },
  { type: "LOCATION", value: "Hyderabad", slug: "hyderabad", sortOrder: 4 },
  { type: "LOCATION", value: "Delhi", slug: "delhi", sortOrder: 5 },

  {
    type: "INTERNSHIP_CATEGORY",
    value: "Software Development",
    slug: "software-development",
    sortOrder: 1,
  },
  {
    type: "INTERNSHIP_CATEGORY",
    value: "Web Development",
    slug: "web-development",
    sortOrder: 2,
  },
  {
    type: "INTERNSHIP_CATEGORY",
    value: "Data Science",
    slug: "data-science",
    sortOrder: 3,
  },
  {
    type: "INTERNSHIP_CATEGORY",
    value: "Marketing",
    slug: "marketing",
    sortOrder: 4,
  },

  {
    type: "COMPANY_TYPE",
    value: "Startup",
    slug: "startup",
    sortOrder: 1,
  },
  {
    type: "COMPANY_TYPE",
    value: "Private Limited",
    slug: "private-limited",
    sortOrder: 2,
  },
  {
    type: "COMPANY_TYPE",
    value: "Public Limited",
    slug: "public-limited",
    sortOrder: 3,
  },

  {
    type: "COMPANY_SIZE",
    value: "1-10",
    slug: "1-10",
    sortOrder: 1,
  },
  {
    type: "COMPANY_SIZE",
    value: "11-50",
    slug: "11-50",
    sortOrder: 2,
  },
  {
    type: "COMPANY_SIZE",
    value: "51-200",
    slug: "51-200",
    sortOrder: 3,
  },
  {
    type: "COMPANY_SIZE",
    value: "201-500",
    slug: "201-500",
    sortOrder: 4,
  },
  {
    type: "COMPANY_SIZE",
    value: "500+",
    slug: "500-plus",
    sortOrder: 5,
  },

  {
    type: "QUALIFICATION",
    value: "B.Tech / B.E.",
    slug: "btech-be",
    sortOrder: 1,
  },
  {
    type: "QUALIFICATION",
    value: "BCA",
    slug: "bca",
    sortOrder: 2,
  },
  {
    type: "QUALIFICATION",
    value: "MCA",
    slug: "mca",
    sortOrder: 3,
  },
  {
    type: "QUALIFICATION",
    value: "Any Graduate",
    slug: "any-graduate",
    sortOrder: 4,
  },
];

async function main() {
  for (const item of datasets) {
    await prisma.datasetOption.upsert({
      where: {
        type_slug: {
          type: item.type,
          slug: item.slug,
        },
      },
      update: {
        value: item.value,
        sortOrder: item.sortOrder,
        active: true,
      },
      create: {
        ...item,
        active: true,
      },
    });
  }

  console.log("Dataset seeding completed");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });