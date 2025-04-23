import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Button24 } from '../../sections/creative-buttons/Button24/Button24';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  return (
    <>
      <PageTitle>Sandbox</PageTitle>

      <div className={styles.sandboxWrapper}>
        <Button24>Happy button</Button24>
      </div>
    </>
  );
}
