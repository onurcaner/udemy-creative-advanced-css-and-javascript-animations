import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card7.module.scss';

export function Card7({
  imageAlt,
  imageUrl,
  linkLabel,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!imageAlt || !imageUrl || !title || !titleAs || !text || !linkLabel)
    throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.hiddenContentCard} aria-hidden>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>

      <div className={styles.imageWrapperCard}>
        <img className={styles.image} src={imageUrl} alt={imageAlt} />
      </div>

      <div className={styles.contentCard}>
        <div className={styles.visibleContentWrapper}>
          <TitleAs className={styles.title}>{title}</TitleAs>
          <p className={styles.paragraph}>{text}</p>
          <a className={styles.link}>{linkLabel}</a>
        </div>
      </div>
    </div>
  );
}
