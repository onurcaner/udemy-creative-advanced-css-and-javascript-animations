import { JSX, useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa6';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Card2 } from '../../sections/creative-cards/Card2/Card2';
import { CardProps } from '../../sections/creative-cards/_types/CardProps';
import { getRandomCatImageUrl } from '../../utils/getRandomCatImageUrl';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  const [isCenter, setIsCenter] = useState(true);

  useEffect(() => {
    const intervalHandler = (): void => {
      setIsCenter((b) => !b);
    };

    const intervalId = setInterval(intervalHandler, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const cardProps: Required<CardProps> = {
    imageAlt: 'cat',
    imageUrl: getRandomCatImageUrl(),
    linkLabel: `Let's go`,
    SvgIcon: <FaReact />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat blanditiis maxime numquam facilis neque placeat obcaecati eveniet nesciunt praesentium?',
    title: `Card title`,
    titleAs: 'h2',
  };

  return (
    <>
      <PageTitle>Sandbox</PageTitle>

      <div className={styles.sandboxWrapper}>
        <div
          className={
            'w-200 h-160 grid outline outline-lime-600' +
            (isCenter
              ? ' items-center justify-items-center'
              : ' items-stretch justify-items-stretch')
          }
        >
          <Card2 {...cardProps} />
        </div>
      </div>
    </>
  );
}
