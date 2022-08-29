import LoadingSpinner from '@assets/looties/loading-spinner/loading-spinner.lootie';
import { MENU_NAVBAR_HEIGHT } from '@constants/styles.constants';

export default function Loading() {
  return (
    <div
      className="w-screen bg-black opacity-25 absolute z-50 flex justify-center items-center"
      style={{ height: `calc(100vh - ${MENU_NAVBAR_HEIGHT})` }}
    >
      <LoadingSpinner style={{ height: '10rem' }} />
    </div>
  );
}
