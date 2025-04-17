import { JSX } from 'react';

import { Button13 } from '../../sections/buttons/Button13/Button13';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  return (
    <div className={styles.sandboxWrapper}>
      <Button13>Happy button</Button13>
    </div>
  );
}
