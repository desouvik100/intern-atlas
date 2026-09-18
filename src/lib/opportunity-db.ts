import { getDatabase } from "@/lib/db";
import { resolveLogoUrl } from "@/lib/logo";
import type { Opportunity, OpportunityType } from "@/lib/types";

type OpportunityRow = {
  id: number;
  type: string;
  title: string;
  organization: string;
  organization_website: string | null;
  logo_url: string | null;
  location: string;
  compensation: string | null;
  apply_by: string | null;
  badges: string;
  time_label: string;
  href: string | null;
};

const selectColumns = `
  id, type, title, organization, organization_website, logo_url, location,
  compensation, apply_by, badges, time_label, href
`;

function parseList(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

function mapRow(row: OpportunityRow): Opportunity {
  return {
    id: `opportunity-${row.id}`,
    title: row.title,
    organization: row.organization,
    type: row.type as OpportunityType,
    location: row.location,
    compensation: row.compensation ?? undefined,
    applyBy: row.apply_by ?? undefined,
    badges: parseList(row.badges),
    timeLabel: row.time_label,
    href: row.href ?? undefined,
    logoUrl: resolveLogoUrl(row.logo_url, row.organization_website),
    organizationWebsite: row.organization_website ?? undefined,
  };
}

export async function listOpportunitiesByType(
  type: OpportunityType,
  limit = 8,
): Promise<Opportunity[]> {
  const database = await getDatabase();
  const result = await database
    .prepare(
      `SELECT ${selectColumns}
       FROM opportunities
       WHERE type = ? AND status = 'active'
       ORDER BY sort_order ASC, id DESC
       LIMIT ?`,
    )
    .bind(type, limit)
    .all<OpportunityRow>();

  return result.results.map(mapRow);
}
