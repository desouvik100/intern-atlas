"use client";

import { useEffect, useState } from "react";

type Employer = {
  id: number;
  email: string;
  name: string | null;
  phone: string | null;
  companyName: string | null;
  companyWebsite: string | null;
  companyDescription: string | null;
  companyLogoUrl: string | null;
  industry: string | null;
  companyType: string | null;
  companySize: string | null;
  foundedYear: number | null;
  address: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  linkedinUrl: string | null;
  gstNumber: string | null;
  cinNumber: string | null;
  verificationStatus: string;
  profileCompleted: boolean;
};

type DatasetOption = {
  id: number;
  value: string;
  slug: string;
};

export default function EmployerProfilePage() {
  const employerId = 1;

  const [form, setForm] = useState<Partial<Employer>>({});
  const [industries, setIndustries] = useState<DatasetOption[]>([]);
  const [companyTypes, setCompanyTypes] = useState<DatasetOption[]>([]);
  const [companySizes, setCompanySizes] = useState<DatasetOption[]>([]);
  const [locations, setLocations] = useState<DatasetOption[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const [
          employerRes,
          industryRes,
          typeRes,
          sizeRes,
          locationRes,
        ] = await Promise.all([
          fetch(`/api/employers/${employerId}`),
          fetch("/api/datasets?type=INDUSTRY"),
          fetch("/api/datasets?type=COMPANY_TYPE"),
          fetch("/api/datasets?type=COMPANY_SIZE"),
          fetch("/api/datasets?type=LOCATION"),
        ]);

        if (!employerRes.ok) {
          throw new Error("Failed to load employer");
        }

        setForm(await employerRes.json());

        if (industryRes.ok) setIndustries(await industryRes.json());
        if (typeRes.ok) setCompanyTypes(await typeRes.json());
        if (sizeRes.ok) setCompanySizes(await sizeRes.json());
        if (locationRes.ok) setLocations(await locationRes.json());
      } catch (error) {
        console.error(error);
        setMessage("Failed to load employer profile.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        name === "foundedYear"
          ? value
            ? Number(value)
            : null
          : value,
    }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch(`/api/employers/${employerId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name || "",
          phone: form.phone || "",
          companyName: form.companyName || "",
          companyWebsite: form.companyWebsite || "",
          companyDescription: form.companyDescription || "",
          companyLogoUrl: form.companyLogoUrl || "",
          industry: form.industry || "",
          companyType: form.companyType || "",
          companySize: form.companySize || "",
          foundedYear: form.foundedYear || undefined,
          address: form.address || "",
          city: form.city || "",
          state: form.state || "",
          country: form.country || "India",
          linkedinUrl: form.linkedinUrl || "",
          gstNumber: form.gstNumber || "",
          cinNumber: form.cinNumber || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Update failed");
      }

      setForm(data);
      setMessage("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading profile...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Employer Profile
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your company and employer information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="grid gap-5 md:grid-cols-2">

            <Input
              label="Your Name"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
              disabled
            />

            <Input
              label="Phone"
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
            />

            <Input
              label="Company Name"
              name="companyName"
              value={form.companyName || ""}
              onChange={handleChange}
            />

            <Input
              label="Company Website"
              name="companyWebsite"
              value={form.companyWebsite || ""}
              onChange={handleChange}
            />

            <Input
              label="LinkedIn URL"
              name="linkedinUrl"
              value={form.linkedinUrl || ""}
              onChange={handleChange}
            />

            <Select
              label="Industry"
              name="industry"
              value={form.industry || ""}
              options={industries}
              onChange={handleChange}
            />

            <Select
              label="Company Type"
              name="companyType"
              value={form.companyType || ""}
              options={companyTypes}
              onChange={handleChange}
            />

            <Select
              label="Company Size"
              name="companySize"
              value={form.companySize || ""}
              options={companySizes}
              onChange={handleChange}
            />

            <Input
              label="Founded Year"
              name="foundedYear"
              type="number"
              value={form.foundedYear?.toString() || ""}
              onChange={handleChange}
            />

            <Select
              label="City"
              name="city"
              value={form.city || ""}
              options={locations}
              onChange={handleChange}
            />

            <Input
              label="State"
              name="state"
              value={form.state || ""}
              onChange={handleChange}
            />

            <Input
              label="Country"
              name="country"
              value={form.country || "India"}
              onChange={handleChange}
            />

            <Input
              label="Company Logo URL"
              name="companyLogoUrl"
              value={form.companyLogoUrl || ""}
              onChange={handleChange}
            />

            <Input
              label="GST Number"
              name="gstNumber"
              value={form.gstNumber || ""}
              onChange={handleChange}
            />

            <Input
              label="CIN Number"
              name="cinNumber"
              value={form.cinNumber || ""}
              onChange={handleChange}
            />

            <div className="md:col-span-2">
              <Input
                label="Address"
                name="address"
                value={form.address || ""}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Company Description
              </label>

              <textarea
                name="companyDescription"
                value={form.companyDescription || ""}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Profile"}
            </button>

            {message && (
              <p className="text-sm text-gray-700">
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({
  label,
  name,
  value,
  type = "text",
  disabled = false,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 disabled:bg-gray-100"
      />
    </div>
  );
}

type SelectProps = {
  label: string;
  name: string;
  value: string;
  options: DatasetOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

function Select({
  label,
  name,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}