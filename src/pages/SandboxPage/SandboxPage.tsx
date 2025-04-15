import { JSX } from 'react';

import { Button10 } from '../../sections/buttons/Button10/Button10';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  return (
    <div className={styles.sandboxWrapper}>
      <Button10>Happy button</Button10>
    </div>
  );
}
