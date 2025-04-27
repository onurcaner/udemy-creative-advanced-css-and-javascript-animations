import { JSX } from 'react';

import { PageTitle } from '../../components/PageTitle/PageTitle';
import { useAdjustableGridContext } from '../../contexts/adjustable-grid/useAdjustableGridContext';
import { Button1 } from '../../sections/creative-buttons/Button1/Button1';
import { Button2 } from '../../sections/creative-buttons/Button2/Button2';
import { Button3 } from '../../sections/creative-buttons/Button3/Button3';
import { Button4 } from '../../sections/creative-buttons/Button4/Button4';
import { Button5 } from '../../sections/creative-buttons/Button5/Button5';
import { Button6 } from '../../sections/creative-buttons/Button6/Button6';
import { Button7 } from '../../sections/creative-buttons/Button7/Button7';
import { Button8 } from '../../sections/creative-buttons/Button8/Button8';
import { Button9 } from '../../sections/creative-buttons/Button9/Button9';
import { Button10 } from '../../sections/creative-buttons/Button10/Button10';
import { Button11 } from '../../sections/creative-buttons/Button11/Button11';
import { Button12 } from '../../sections/creative-buttons/Button12/Button12';
import { Button13 } from '../../sections/creative-buttons/Button13/Button13';
import { Button14 } from '../../sections/creative-buttons/Button14/Button14';
import { Button15 } from '../../sections/creative-buttons/Button15/Button15';
import { Button16 } from '../../sections/creative-buttons/Button16/Button16';
import { Button17 } from '../../sections/creative-buttons/Button17/Button17';
import { Button18 } from '../../sections/creative-buttons/Button18/Button18';
import { Button19 } from '../../sections/creative-buttons/Button19/Button19';
import { Button20 } from '../../sections/creative-buttons/Button20/Button20';
import { Button21 } from '../../sections/creative-buttons/Button21/Button21';
import { Button22 } from '../../sections/creative-buttons/Button22/Button22';
import { Button23 } from '../../sections/creative-buttons/Button23/Button23';
import { Button24 } from '../../sections/creative-buttons/Button24/Button24';
import { joinCssModuleStyles } from '../../utils/joinCssModuleStyles';

import styles from './CreativeButtonsPage.module.scss';

export function CreativeButtonsPage(): JSX.Element {
  const { gridClassName } = useAdjustableGridContext();

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
    Button22,
    Button23,
    Button24,
  ];

  return (
    <>
      <PageTitle>Creative Buttons</PageTitle>

      <ol className={joinCssModuleStyles(styles.list, gridClassName)}>
        {Buttons.map((Button, i) => (
          <li key={i}>
            <Button>{`Button ${(i + 1).toString()}`}</Button>
          </li>
        ))}
      </ol>
    </>
  );
}
