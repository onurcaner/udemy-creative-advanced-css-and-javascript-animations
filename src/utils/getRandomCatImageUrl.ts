import catImageUrl01 from '../assets/cat-images/adult-brown-cat-Ah_QC2v2alE.webp';
import catImageUrl02 from '../assets/cat-images/brown-scottish-fold-in-brown-thick-pile-blanket-NodtnCsLdTE.webp';
import catImageUrl03 from '../assets/cat-images/cat-sitting-on-gray-concrete-pavement-MKAo_NukhdA.webp';
import catImageUrl04 from '../assets/cat-images/gray-tabby-kitten-leaning-on-white-wall-VwqecUsYKvs.webp';
import catImageUrl05 from '../assets/cat-images/orange-and-white-cat-on-gray-concrete-floor-zlqZtlHTv3E.webp';
import catImageUrl06 from '../assets/cat-images/orange-and-white-cat-on-gray-concrete-surface-25XB0eydEC4.webp';
import catImageUrl07 from '../assets/cat-images/orange-tabby-cat-in-brown-cardboard-box-mrTydVjg04o.webp';
import catImageUrl08 from '../assets/cat-images/selective-focus-photograph-of-brown-tabby-cat-jVCWcao53u0.webp';
import catImageUrl09 from '../assets/cat-images/selective-focus-photography-of-black-white-and-brown-cat-lying-on-wooden-table-0EuYG6tl01Y.webp';
import catImageUrl10 from '../assets/cat-images/selective-focus-photography-of-white-cat-FRpJVO1AjlA.webp';
import catImageUrl11 from '../assets/cat-images/short-fur-white-cat-on-blue-linen-9OBUE-F7KJk.webp';
import catImageUrl12 from '../assets/cat-images/silver-tabby-cat-on-brown-wooden-chair-YZdB3DtYD2A.webp';
import catImageUrl13 from '../assets/cat-images/silver-tabby-cat-on-wooden-fence-OUp4vSDgW-4.webp';
import catImageUrl14 from '../assets/cat-images/silver-tabby-kitten-on-floor-7AIDE8PrvA0.webp';
import catImageUrl15 from '../assets/cat-images/tiger-animal-oMvtVzcFPlU.webp';
import catImageUrl16 from '../assets/cat-images/white-and-black-cat-on-gray-soil-MK4D8tqfrQs.webp';
import catImageUrl17 from '../assets/cat-images/white-cat-on-brown-wooden-table-OZjypvcu3uo.webp';
import catImageUrl18 from '../assets/cat-images/white-cat-on-white-floor-UTU4apKofsI.webp';
import catImageUrl19 from '../assets/cat-images/white-coated-persian-cat-sitting-on-brown-wooden-surface-X7UR0BDz-UY.webp';

const catImageUrls = [
  catImageUrl01,
  catImageUrl02,
  catImageUrl03,
  catImageUrl04,
  catImageUrl05,
  catImageUrl06,
  catImageUrl07,
  catImageUrl08,
  catImageUrl09,
  catImageUrl10,
  catImageUrl11,
  catImageUrl12,
  catImageUrl13,
  catImageUrl14,
  catImageUrl15,
  catImageUrl16,
  catImageUrl17,
  catImageUrl18,
  catImageUrl19,
];

export function getRandomCatImageUrl(): string {
  const randomIndex = Math.floor(catImageUrls.length * Math.random());
  const catImageUrl = catImageUrls.at(randomIndex);
  if (!catImageUrl) throw new Error();

  return catImageUrl;
}
