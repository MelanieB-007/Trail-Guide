import { getDb } from "./db.js";

// Holt alle Regionen für die Übersicht
export async function getAllRegions() {
  const db = await getDb();
  return db.all("SELECT * FROM regions ORDER BY name ASC");
}

// Holt eine Region anhand ihres Slugs
export async function getRegionBySlug(slug: string) {
  const db = await getDb();
  return db.get("SELECT * FROM regions WHERE slug = ?", [slug]);
}

// Holt alle Trails, die zu einer bestimmten Region gehören
export async function getTrailsByRegionId(regionId: number) {
  const db = await getDb();
  return db.all("SELECT * FROM trails WHERE region_id = ?", [regionId]);
}
