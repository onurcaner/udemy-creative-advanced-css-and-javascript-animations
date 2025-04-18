import { JSX } from 'react';

import { Button17 } from '../../sections/buttons/Button17/Button17';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  return (
    <div className={styles.sandboxWrapper}>
      <Button17>Happy button</Button17>
    </div>
  );
}
