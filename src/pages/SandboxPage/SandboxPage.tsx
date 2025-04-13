import { JSX } from 'react';

import { Button6 } from '../../sections/buttons/Button6/Button6';

import styles from './SandboxPage.module.scss';

export function SandboxPage(): JSX.Element {
  return (
    <div className={styles.sandboxWrapper}>
      <Button6>Happy button</Button6>
    </div>
  );
}
