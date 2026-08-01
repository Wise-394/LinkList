export function validateImage(
  profile: File | string | null,
  cover: File | string | null,
) {
  if (!profile || !cover) {
    return "Profile and cover must not be empty";
  }
  return false;
}

export function validateBasicInfo(name: string, description: string) {
  if (!name || !description) {
    return "name and description cannot be empty";
  }
  if (name.length < 4) {
    return "name must be more than 4 characters";
  }
  return false;
}
