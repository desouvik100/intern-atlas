// A company logo comes from one of two places, in order:
//   1. the logo_url the employer saved on their profile
//   2. the favicon of their company website, at 128px
// If neither exists the card falls back to a letter tile (see LogoMark).

export function extractDomain(website?: string | null): string | null {
  if (!website) {
    return null;
  }

  const trimmed = website.trim();

  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(
      trimmed.startsWith("http") ? trimmed : `https://${trimmed}`,
    );
    return url.hostname.replace(/^www\./, "") || null;
  } catch {
    return null;
  }
}

export function resolveLogoUrl(
  logoUrl?: string | null,
  website?: string | null,
): string | null {
  const direct = logoUrl?.trim();

  if (direct) {
    return direct;
  }

  const domain = extractDomain(website);

  if (!domain) {
    return null;
  }

  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}
