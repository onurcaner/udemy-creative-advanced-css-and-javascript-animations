import { JSX } from 'react';

import { ImageEffectProps } from '../_types/ImageEffectProps';

import styles from './ImageEffect9.module.scss';

export function ImageEffect9({
  imageAlt,
  imageUrl,
  linkLabel,
  text,
  title,
  titleAs,
}: ImageEffectProps): JSX.Element {
  if (!text || !title || !titleAs || !linkLabel) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.imageEffect}>
      <div className={styles.contentWrapper}>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a href="#" className={styles.link}>
          {linkLabel}
        </a>
      </div>

      <div className={styles.background} />

      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
}
