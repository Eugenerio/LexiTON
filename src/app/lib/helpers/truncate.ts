export function truncateWithEllipsis(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  }

  const halfLength = Math.floor((maxLength - 3) / 2); // Subtract 3 for "..."
  const firstPart = str.substring(0, halfLength);
  const lastPart = str.substring(str.length - halfLength);
  return `${firstPart}...${lastPart}`;
}