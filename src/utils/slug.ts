export function toSlug(nazevCz: string, id: string): string {
  const base = nazevCz
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${base}-${id}`;
}

export function idFromSlug(slug: string): string {
  const lastDash = slug.lastIndexOf("-");
  return lastDash >= 0 ? slug.slice(lastDash + 1) : slug;
}
