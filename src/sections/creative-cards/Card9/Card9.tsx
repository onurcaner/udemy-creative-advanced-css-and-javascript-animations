import { ReactElement } from 'react';

import { CardProps } from '../_types/CardProps';

import styles from './Card9.module.scss';

export function Card9({
  SvgIcon,
  linkLabel,
  text,
  title,
  titleAs,
}: CardProps): ReactElement {
  if (!SvgIcon || !title || !titleAs || !text || !linkLabel) throw new Error();

  const TitleAs = titleAs;

  return (
    <div className={styles.card}>
      <div className={styles.hiddenContentWrapper} aria-hidden>
        <div className={styles.iconWrapper} aria-hidden>
          {SvgIcon}
        </div>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <p className={styles.paragraph}>{text}</p>
        <a className={styles.link}>{linkLabel}</a>
      </div>

      <div className={styles.visibleContentWrapper}>
        <div className={styles.iconWrapper} aria-hidden>
          {SvgIcon}
        </div>
        <TitleAs className={styles.title}>{title}</TitleAs>
        <div className={styles.paragraphWrapper}>
          <p className={styles.paragraph} aria-hidden>
            {text}
          </p>
          <p className={styles.paragraph} aria-hidden={false}>
            {text}
          </p>
        </div>
        <div className={styles.linkWrapper}>
          <a className={styles.link} aria-hidden>
            {linkLabel}
          </a>
          <a className={styles.link} aria-hidden={false}>
            {linkLabel}
          </a>
        </div>
      </div>

      <div className={styles.decorationDisk} aria-hidden />
      <div className={styles.decorationTitle} aria-hidden>
        {title}
      </div>
    </div>
  );
}
