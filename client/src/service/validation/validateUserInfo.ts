export function validateImage(profile: File | null, cover: File | null) {
  if (!profile || !cover) {
    return true;
  }
  return false;
}

export function validateBasicInfo(name: string, description: string) {
  if (!name || !description) {
    return true;
  }
  if (name.length < 4) {
    return true;
  }
  return false;
}
