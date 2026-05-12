import { getDb } from "./db.js";

export async function getAllRegions() {
  const db = await getDb();
  return db.all("SELECT * FROM regions ORDER BY name ASC");
}

export async function getRegionBySlug(slug: string) {
  const db = await getDb();
  return db.get("SELECT * FROM regions WHERE slug = ?", [slug]);
}
