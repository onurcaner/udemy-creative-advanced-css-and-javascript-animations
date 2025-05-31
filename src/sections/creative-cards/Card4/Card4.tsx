import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card4.module.scss';

export function Card4({
  SvgIcon,
  linkLabel,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!SvgIcon || !title || !titleAs || !text || !linkLabel) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        <div className={styles.iconPlaceholder} aria-hidden />
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>

        <div className={styles.iconWrapper} aria-hidden>
          {SvgIcon}
        </div>
      </div>
    </div>
  );
}
