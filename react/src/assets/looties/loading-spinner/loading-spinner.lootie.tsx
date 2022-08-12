import Lottie from 'lottie-react';
import { CSSProperties } from 'react';

import loadingAnimation from './loading-spinner.lootie.json';

export default function LoadingSpinner({ style }: { style: CSSProperties }) {
  return <Lottie animationData={loadingAnimation} loop style={style} />;
}
