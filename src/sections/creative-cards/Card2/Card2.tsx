import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card2.module.scss';

export function Card2({
  imageAlt,
  imageUrl,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!imageAlt || !imageUrl || !title || !titleAs || !text) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={imageAlt} />
      </div>

      <div className={styles.visibleTextContentWrapper}>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
      </div>

      <div className={styles.hiddenTextContentWrapper}>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
      </div>
    </div>
  );
}
