/** Generate a short unique id (no crypto dependency, fine for local state). */
export function newId(prefix = "id"): string {
  const time = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${time}-${rand}`;
}
