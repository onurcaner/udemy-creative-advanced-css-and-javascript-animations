export interface ImageEffectProps {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  linkLabel?: string;
}
