import { MENU_NAVBAR_HEIGHT } from '@constants/styles.constants';
import { lazy } from 'react';

const LoadingSpinner = lazy(() => import('@assets/looties/loading-spinner/loading-spinner.lootie'));

export default function LoadingLayout({ isSuspense }: { isSuspense?: boolean }) {
  return (
    <div
      className="absolute z-50 flex w-screen items-center justify-center bg-black opacity-25"
      style={{ height: `calc(100vh${isSuspense ? '' : ` - ${MENU_NAVBAR_HEIGHT}`})` }}
    >
      <LoadingSpinner style={{ height: '25%' }} />
    </div>
  );
}

LoadingLayout.defaultProps = { isSuspense: true };