import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ImageEffect9 } from '../../sections/creative-image-effects/ImageEffect9/ImageEffect9';
import { getRandomCatImageUrl } from '../../utils/getRandomCatImageUrl';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  const imageUrl = getRandomCatImageUrl();
  const imageAlt = 'Ignore';
  const title = 'Hello world';
  const titleAs = 'h2';
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ea repellat praesentium, fugit qui quidem dolore, quia ipsa ab similique corporis eos est error.';
  const linkLabel = "Let's go";

  return (
    <>
      <PageTitle>Sandbox</PageTitle>

      <div className={styles.sandboxWrapper}>
        <ImageEffect9
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          title={title}
          titleAs={titleAs}
          text={text}
          linkLabel={linkLabel}
        />
      </div>
    </>
  );
}
