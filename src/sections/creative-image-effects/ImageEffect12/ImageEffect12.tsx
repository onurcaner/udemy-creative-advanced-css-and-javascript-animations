import { JSX } from 'react';

import { ImageEffectProps } from '../_types/ImageEffectProps';

import styles from './ImageEffect12.module.scss';

export function ImageEffect12({
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
      </div>

      <div className={styles.background} />

      <div className={styles.imageWrapper}>
        <img className={styles.hiddenImage} src={imageUrl} alt={imageAlt} />
        <img className={styles.leftImageFragment} src={imageUrl} aria-hidden />
        <img className={styles.rightImageFragment} src={imageUrl} aria-hidden />
      </div>
    </div>
  );
}
