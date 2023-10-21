export function getFirstLetterUppercase(str?: string | null): string {
  return str?.charAt(0).toUpperCase() ?? '';
}
