import { JSX } from 'react';

export function PageTitle({ children }: { children?: string }): JSX.Element {
  const titlePrefix = 'Creative Advanced CSS';
  const separator = '|';
  const titleSuffix = children;

  const pageTitle = titleSuffix
    ? `${titlePrefix} ${separator} ${titleSuffix}`
    : titlePrefix;

  return <title>{pageTitle}</title>;
}
