import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ImageEffect1 } from '../../sections/creative-image-effects/ImageEffect1/ImageEffect1';
import { ImageEffect2 } from '../../sections/creative-image-effects/ImageEffect2/ImageEffect2';
import { ImageEffect3 } from '../../sections/creative-image-effects/ImageEffect3/ImageEffect3';
import { getRandomCatImageUrl } from '../../utils/getRandomCatImageUrl';

import styles from './CreativeImageEffectsPage.module.scss';

export function CreativeImageEffectsPage(): JSX.Element {
  const ImageEffects = [ImageEffect1, ImageEffect2, ImageEffect3];

  return (
    <>
      <PageTitle>Creative Images</PageTitle>

      <ol className={styles.list}>
        {ImageEffects.map((ImageEffect, i) => (
          <li key={i}>
            <ImageEffect
              key={i + 1}
              imageUrl={getRandomCatImageUrl()}
              imageAlt="Ignore"
              title={`Image effect ${(i + 1).toString()}`}
              titleAs="h2"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe exercitationem pariatur est recusandae hic totam aliquid iste fugit omnis, vitae eius culpa labore accusamus."
              linkLabel="Let's go"
            />
          </li>
        ))}
      </ol>
    </>
  );
}
