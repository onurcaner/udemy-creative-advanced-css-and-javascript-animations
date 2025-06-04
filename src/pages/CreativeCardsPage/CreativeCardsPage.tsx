import { JSX } from 'react';
import { FaReact } from 'react-icons/fa6';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';
import { Card1 } from '../../sections/creative-cards/Card1/Card1';
import { Card2 } from '../../sections/creative-cards/Card2/Card2';
import { Card3 } from '../../sections/creative-cards/Card3/Card3';
import { Card4 } from '../../sections/creative-cards/Card4/Card4';
import { Card5 } from '../../sections/creative-cards/Card5/Card5';
import { Card6 } from '../../sections/creative-cards/Card6/Card6';
import { Card7 } from '../../sections/creative-cards/Card7/Card7';
import { Card8 } from '../../sections/creative-cards/Card8/Card8';
import { Card9 } from '../../sections/creative-cards/Card9/Card9';
import { CardProps } from '../../sections/creative-cards/_types/CardProps';
import { getRandomCatImageUrl } from '../../utils/getRandomCatImageUrl';
import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './CreativeCardsPage.module.scss';

export function CreativeCardsPage(): JSX.Element {
  const { gridClassName } = useAdjustableGridContext();

  const Cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9];

  const generateCardProps = (number: number): Required<CardProps> => {
    return {
      imageAlt: 'cat',
      imageUrl: getRandomCatImageUrl(),
      linkLabel: `Let's go ${number.toString()}`,
      SvgIcon: <FaReact />,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat blanditiis maxime numquam facilis neque placeat obcaecati eveniet nesciunt praesentium?',
      title: `Card title ${number.toString()}`,
      titleAs: 'h2',
    };
  };

  return (
    <>
      <PageTitle>Creative Cards</PageTitle>

      <ol className={joinCssModuleStyles(styles.list, gridClassName)}>
        {Cards.map((Card, i) => (
          <li key={i}>
            <Card {...generateCardProps(i + 1)} />
          </li>
        ))}
      </ol>
    </>
  );
}
