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
  // WICHTIG: Wir holen die Trails (t) und joinen die Regions (r)
  const sql = `
    SELECT
      t.name,
      t.slug,
      t.distance,
      r.name as regionName,
      r.country
    FROM trails t
           JOIN regions r ON t.region_id = r.id
    WHERE t.region_id = ?`;

  return db.all(sql, [regionId]);
}
