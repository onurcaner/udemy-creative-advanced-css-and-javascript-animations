import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card5.module.scss';

export function Card5(cardProps: CardProps): ReactElement {
  return (
    <div className={styles.cardWrapper}>
      <TopCard {...cardProps} />
      <BottomCard {...cardProps} />
    </div>
  );
}

function TopCard({
  SvgIcon,
  linkLabel,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!SvgIcon || !linkLabel || !text || !title || !titleAs) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.topCard}>
      <div className={styles.visibleContentWrapper} aria-hidden>
        <div className={styles.iconWrapper} aria-hidden>
          {SvgIcon}
        </div>
        <TitleAs className={styles.title}>{title}</TitleAs>
      </div>

      <div className={styles.hiddenContentWrapper} aria-hidden>
        <div className={styles.iconWrapper} aria-hidden>
          {SvgIcon}
        </div>
        <TitleAs className={styles.title}>{title}</TitleAs>
      </div>
      <div className={styles.hiddenContentWrapper} aria-hidden>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>
    </div>
  );
}

function BottomCard({
  SvgIcon,
  linkLabel,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!SvgIcon || !linkLabel || !text || !title || !titleAs) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.bottomCard}>
      <div className={styles.visibleContentWrapper}>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>

      <div className={styles.hiddenContentWrapper} aria-hidden>
        <div className={styles.iconWrapper} aria-hidden>
          {SvgIcon}
        </div>
        <TitleAs className={styles.title}>{title}</TitleAs>
      </div>
      <div className={styles.hiddenContentWrapper} aria-hidden>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>
    </div>
  );
}
