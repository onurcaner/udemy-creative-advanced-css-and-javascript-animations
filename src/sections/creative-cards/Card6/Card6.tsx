import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card6.module.scss';

export function Card6({
  imageAlt,
  imageUrl,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!imageAlt || !imageUrl || !title || !titleAs || !text) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.cardStack}>
      {Array.from({ length: Number(styles.stackSize) }).map((_, index) => (
        <div key={index} className={styles.card} aria-hidden={index !== 0}>
          <>
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={imageUrl} alt={imageAlt} />
            </div>

            <div className={styles.textContentWrapper}>
              <TitleAs className={styles.title}>{title}</TitleAs>
              <p className={styles.paragraph}>{text.slice(0, 30)}</p>
            </div>
          </>
        </div>
      ))}
    </div>
  );
}
