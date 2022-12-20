import { MENU_NAVBAR_HEIGHT } from '@constants/styles.constants';

import LoadingSpinner from './spinner/loading-spinner.component';

export default function LoadingLayout({ isSuspense }: { isSuspense?: boolean }) {
  return (
    <div
      className="absolute z-50 flex w-screen items-center justify-center bg-black opacity-25"
      style={{ height: `calc(100vh${isSuspense ? '' : ` - ${MENU_NAVBAR_HEIGHT}`})` }}
    >
      <LoadingSpinner tailwindClasses='h-16 w-16' />
    </div>
  );
}

LoadingLayout.defaultProps = { isSuspense: true };