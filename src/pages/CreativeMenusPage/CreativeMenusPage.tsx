import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';
import { Menu1 } from '../../sections/creative-menus/Menu1/Menu1';
import { Menu2 } from '../../sections/creative-menus/Menu2/Menu2';
import { Menu3 } from '../../sections/creative-menus/Menu3/Menu3';
import { Menu4 } from '../../sections/creative-menus/Menu4/Menu4';
import { Menu5 } from '../../sections/creative-menus/Menu5/Menu5';
import { Menu6 } from '../../sections/creative-menus/Menu6/Menu6';
import { Menu7 } from '../../sections/creative-menus/Menu7/Menu7';
import { Menu8 } from '../../sections/creative-menus/Menu8/Menu8';
import { Menu9 } from '../../sections/creative-menus/Menu9/Menu9';
import { Menu10 } from '../../sections/creative-menus/Menu10/Menu10';
import { Menu11 } from '../../sections/creative-menus/Menu11/Menu11';
import { Menu12 } from '../../sections/creative-menus/Menu12/Menu12';
import { Menu13 } from '../../sections/creative-menus/Menu13/Menu13';
import { MenuButtonAttributes } from '../../sections/creative-menus/_types/MenuProps';
import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './CreativeMenusPage.module.scss';

export function CreativeMenusPage(): JSX.Element {
  const { gridClassName } = useAdjustableGridContext();

  const Menus = [
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6,
    Menu7,
    Menu8,
    Menu9,
    Menu10,
    Menu11,
    Menu12,
    Menu13,
  ];

  const createCollectionOfMenuButtonAttributes = (
    menuNumber: number,
  ): MenuButtonAttributes[] => {
    return [
      {
        label: `Home ${String(menuNumber)}`,
      },
      {
        label: `About ${String(menuNumber)}`,
      },
      {
        label: `Services ${String(menuNumber)}`,
      },
      {
        label: `Portfolio ${String(menuNumber)}`,
      },
      {
        label: `Contact ${String(menuNumber)}`,
      },
    ];
  };

  return (
    <>
      <PageTitle>Creative Menus</PageTitle>

      <ol className={joinCssModuleStyles(styles.list, gridClassName)}>
        {Menus.map((Menu, i) => (
          <li key={i}>
            <Menu
              collectionOfMenuButtonAttributes={createCollectionOfMenuButtonAttributes(
                i + 1,
              )}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
