import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card1.module.scss';

export function Card1({
  linkLabel,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!title || !titleAs || !text || !linkLabel) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>

      <div className={styles.backgroundOfCard} aria-hidden />
    </div>
  );
}
