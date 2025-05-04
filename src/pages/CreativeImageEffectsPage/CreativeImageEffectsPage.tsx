import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';
import { ImageEffect1 } from '../../sections/creative-image-effects/ImageEffect1/ImageEffect1';
import { ImageEffect2 } from '../../sections/creative-image-effects/ImageEffect2/ImageEffect2';
import { ImageEffect3 } from '../../sections/creative-image-effects/ImageEffect3/ImageEffect3';
import { ImageEffect4 } from '../../sections/creative-image-effects/ImageEffect4/ImageEffect4';
import { ImageEffect5 } from '../../sections/creative-image-effects/ImageEffect5/ImageEffect5';
import { ImageEffect6 } from '../../sections/creative-image-effects/ImageEffect6/ImageEffect6';
import { ImageEffect7 } from '../../sections/creative-image-effects/ImageEffect7/ImageEffect7';
import { ImageEffect8 } from '../../sections/creative-image-effects/ImageEffect8/ImageEffect8';
import { ImageEffect9 } from '../../sections/creative-image-effects/ImageEffect9/ImageEffect9';
import { ImageEffect10 } from '../../sections/creative-image-effects/ImageEffect10/ImageEffect10';
import { ImageEffect11 } from '../../sections/creative-image-effects/ImageEffect11/ImageEffect11';
import { ImageEffect12 } from '../../sections/creative-image-effects/ImageEffect12/ImageEffect12';
import { getRandomCatImageUrl } from '../../utils/getRandomCatImageUrl';
import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './CreativeImageEffectsPage.module.scss';

export function CreativeImageEffectsPage(): JSX.Element {
  const { gridClassName } = useAdjustableGridContext();

  const ImageEffects = [
    ImageEffect1,
    ImageEffect2,
    ImageEffect3,
    ImageEffect4,
    ImageEffect5,
    ImageEffect6,
    ImageEffect7,
    ImageEffect8,
    ImageEffect9,
    ImageEffect10,
    ImageEffect11,
    ImageEffect12,
  ];

  return (
    <>
      <PageTitle>Creative Images</PageTitle>

      <ol className={joinCssModuleStyles(styles.list, gridClassName)}>
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
