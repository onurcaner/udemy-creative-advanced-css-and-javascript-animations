import { JSX } from 'react';
import { FaReact } from 'react-icons/fa6';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Card1 } from '../../sections/creative-cards/Card1/Card1';
import { CardProps } from '../../sections/creative-cards/_types/CardProps';
import { getRandomCatImageUrl } from '../../utils/getRandomCatImageUrl';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
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
        <Card1 {...cardProps} />
      </div>
    </>
  );
}
