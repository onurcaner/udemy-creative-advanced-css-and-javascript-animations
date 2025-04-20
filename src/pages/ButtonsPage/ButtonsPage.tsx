import { JSX } from 'react';

import { Button1 } from '../../sections/buttons/Button1/Button1';
import { Button2 } from '../../sections/buttons/Button2/Button2';
import { Button3 } from '../../sections/buttons/Button3/Button3';
import { Button4 } from '../../sections/buttons/Button4/Button4';
import { Button5 } from '../../sections/buttons/Button5/Button5';
import { Button6 } from '../../sections/buttons/Button6/Button6';
import { Button7 } from '../../sections/buttons/Button7/Button7';
import { Button8 } from '../../sections/buttons/Button8/Button8';
import { Button9 } from '../../sections/buttons/Button9/Button9';
import { Button10 } from '../../sections/buttons/Button10/Button10';
import { Button11 } from '../../sections/buttons/Button11/Button11';
import { Button12 } from '../../sections/buttons/Button12/Button12';
import { Button13 } from '../../sections/buttons/Button13/Button13';
import { Button14 } from '../../sections/buttons/Button14/Button14';
import { Button15 } from '../../sections/buttons/Button15/Button15';
import { Button16 } from '../../sections/buttons/Button16/Button16';
import { Button17 } from '../../sections/buttons/Button17/Button17';
import { Button18 } from '../../sections/buttons/Button18/Button18';
import { Button19 } from '../../sections/buttons/Button19/Button19';
import { Button20 } from '../../sections/buttons/Button20/Button20';
import { Button21 } from '../../sections/buttons/Button21/Button21';

import styles from './ButtonsPage.module.scss';

export function ButtonsPage(): JSX.Element {
  const Buttons = [
    Button1,
    Button2,
    Button3,
    Button4,
    Button5,
    Button6,
    Button7,
    Button8,
    Button9,
    Button10,
    Button11,
    Button12,
    Button13,
    Button14,
    Button15,
    Button16,
    Button17,
    Button18,
    Button19,
    Button20,
    Button21,
  ];

  return (
    <ol className={styles.list}>
      {Buttons.map((Button, i) => (
        <li key={i}>
          <Button>{`Button ${(i + 1).toString()}`}</Button>
        </li>
      ))}
    </ol>
  );
}
