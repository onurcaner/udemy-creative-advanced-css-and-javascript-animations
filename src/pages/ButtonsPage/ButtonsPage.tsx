import { JSX } from 'react';

import { Button1 } from '../../sections/buttons/Button1/Button1';
import { Button2 } from '../../sections/buttons/Button2/Button2';
import { Button3 } from '../../sections/buttons/Button3/Button3';

import styles from './ButtonsPage.module.scss';

export function ButtonsPage(): JSX.Element {
  const Buttons = [Button1, Button2, Button3];

  return (
    <ol className={styles.list}>
      {Buttons.map((Button, i) => (
        <li key={i}>
          <Button>Button {i + 1}</Button>
        </li>
      ))}
    </ol>
  );
}
