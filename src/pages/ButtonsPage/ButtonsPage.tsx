import { JSX } from 'react';

import { Button1 } from '../../sections/buttons/Button1/Button1';
import { Button2 } from '../../sections/buttons/Button2/Button2';
import { Button3 } from '../../sections/buttons/Button3/Button3';
import { Button4 } from '../../sections/buttons/Button4/Button4';
import { Button5 } from '../../sections/buttons/Button5/Button5';
import { Button6 } from '../../sections/buttons/Button6/Button6';

import styles from './ButtonsPage.module.scss';

export function ButtonsPage(): JSX.Element {
  const Buttons = [Button1, Button2, Button3, Button4, Button5, Button6];

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
