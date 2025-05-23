import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';
import { Menu1 } from '../../sections/creative-menus/Menu1/Menu1';
import { Menu2 } from '../../sections/creative-menus/Menu2/Menu2';
import { Menu3 } from '../../sections/creative-menus/Menu3/Menu3';
import { Menu4 } from '../../sections/creative-menus/Menu4/Menu4';
import { Menu5 } from '../../sections/creative-menus/Menu5/Menu5';
import { Menu6 } from '../../sections/creative-menus/Menu6/Menu6';
import { MenuButtonAttributes } from '../../sections/creative-menus/_types/MenuProps';
import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './CreativeMenusPage.module.scss';

export function CreativeMenusPage(): JSX.Element {
  const { gridClassName } = useAdjustableGridContext();

  const Menus = [Menu1, Menu2, Menu3, Menu4, Menu5, Menu6];

  const collectionOfMenuButtonAttributes: MenuButtonAttributes[] = [
    {
      label: 'Home',
    },
    {
      label: 'About',
    },
    {
      label: 'Services',
    },
    {
      label: 'Portfolio',
    },
    {
      label: 'Contact',
    },
  ];

  return (
    <>
      <PageTitle>Creative Menus</PageTitle>

      <ol className={joinCssModuleStyles(styles.list, gridClassName)}>
        {Menus.map((Menu, i) => (
          <li key={i}>
            <Menu
              collectionOfMenuButtonAttributes={
                collectionOfMenuButtonAttributes
              }
            />
          </li>
        ))}
      </ol>
    </>
  );
}
