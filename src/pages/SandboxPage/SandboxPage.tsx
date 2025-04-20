import { JSX } from 'react';

import { Button21 } from '../../sections/buttons/Button21/Button21';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  return (
    <div className={styles.sandboxWrapper}>
      <Button21>Happy button</Button21>
    </div>
  );
}
