import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card8.module.scss';

export function Card8({
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
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageUrl} alt={imageAlt} />
        </div>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.visibleLink}>{linkLabel}</a>
        <a className={styles.hiddenLink} aria-hidden>
          {linkLabel}
        </a>
      </div>

      <div className={styles.backgroundWrapper} aria-hidden>
        <div className={styles.topBackground} />
        <div className={styles.bottomBackground} />
      </div>
    </div>
  );
}
