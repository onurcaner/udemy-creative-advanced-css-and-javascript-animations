import { JSX } from 'react';

import { Button3 } from '../../sections/buttons/Button3/Button3';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  return (
    <div className={styles.sandboxWrapper}>
      <Button3>Happy button</Button3>
    </div>
  );
}
