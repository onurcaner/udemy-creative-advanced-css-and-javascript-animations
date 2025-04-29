import { JSX } from 'react';

import { ImageEffectProps } from '../_types/ImageEffectProps';

import styles from './ImageEffect6.module.scss';

export function ImageEffect6({
  imageAlt,
  imageUrl,
}: ImageEffectProps): JSX.Element {
  return (
    <div className={styles.imageEffect}>
      <img className={styles.image} src={imageUrl} alt={imageAlt} />
    </div>
  );
}
