import { JSX } from 'react';

import { ImageEffectProps } from '../_types/ImageEffectProps';

import styles from './ImageEffect3.module.scss';

export function ImageEffect3({
  imageAlt,
  imageUrl,
  text,
  title,
  titleAs,
}: ImageEffectProps): JSX.Element {
  if (!text || !title || !titleAs) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.imageEffect}>
      <div className={styles.contentWrapper}>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
      </div>

      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
}
