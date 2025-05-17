import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Menu2 } from '../../sections/creative-menus/Menu2/Menu2';
import { MenuButtonAttributes } from '../../sections/creative-menus/_types/MenuProps';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
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
      <PageTitle>Sandbox</PageTitle>

      <div className={styles.sandboxWrapper}>
        <Menu2
          collectionOfMenuButtonAttributes={collectionOfMenuButtonAttributes}
        />
      </div>
    </>
  );
}
