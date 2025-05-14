import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Menu1 } from '../../sections/creative-menus/Menu1/Menu1';
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
        <Menu1
          collectionOfMenuButtonAttributes={collectionOfMenuButtonAttributes}
        />
      </div>
    </>
  );
}
