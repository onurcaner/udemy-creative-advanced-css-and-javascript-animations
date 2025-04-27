import { JSX } from 'react';

import { ImageEffectProps } from '../_types/ImageEffectProps';

import styles from './ImageEffect4.module.scss';

export function ImageEffect4({
  imageAlt,
  imageUrl,
  title,
}: ImageEffectProps): JSX.Element {
  if (!title) throw new Error();

  return (
    <figure className={styles.imageEffect}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={imageAlt} />
      </div>

      <figcaption className={styles.caption}>{title}</figcaption>

      <span className={styles.hiddenCaption} aria-hidden>
        {title}
      </span>
    </figure>
  );
}
