import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card3.module.scss';

export function Card3({
  imageAlt,
  imageUrl,
  linkLabel,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!title || !titleAs || !text || !linkLabel || !imageAlt || !imageUrl)
    throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.card}>
      <div className={styles.hiddenContentWrapper} aria-hidden>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>

      <div className={styles.hiddenContentWrapper} aria-hidden>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>

      <div className={styles.visibleContentWrapper}>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>

      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
}
