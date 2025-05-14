import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';
import { Menu1 } from '../../sections/creative-menus/Menu1/Menu1';
import { MenuButtonAttributes } from '../../sections/creative-menus/_types/MenuProps';
import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './CreativeMenusPage.module.scss';

export function CreativeMenusPage(): JSX.Element {
  const { gridClassName } = useAdjustableGridContext();

  const Menus = [Menu1];

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
