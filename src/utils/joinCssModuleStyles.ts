export function joinCssModuleStyles(
  ...styles: (string | boolean | null | undefined)[]
): string {
  return styles.filter((style) => typeof style === 'string').join(' ');
}
