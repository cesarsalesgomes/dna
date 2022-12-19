import { showForbiddenAccessModalAtom } from '@atoms/show-forbidden-access-modal.atom';
import { MENU_NAVBAR_HEIGHT } from '@constants/styles.constants';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { SetStateAction, useAtom } from 'jotai';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useResetShowForbiddenAccessModalOnRouteChange(setShowForbiddenAccessModal: (update: SetStateAction<boolean>) => void) {
  const location = useLocation();

  useEffect(() => {
    setShowForbiddenAccessModal(false);
  }, [location, setShowForbiddenAccessModal]);
}

export default function ForbiddenAccessModal() {
  const [showForbiddenAccessModal, setShowForbiddenAccessModal] = useAtom(showForbiddenAccessModalAtom);

  useResetShowForbiddenAccessModalOnRouteChange(setShowForbiddenAccessModal);

  return showForbiddenAccessModal ?
    (

      <div className="absolute z-30 flex w-screen items-center justify-center bg-gray-500/60 px-4"
        style={{
          height: `calc(100vh - ${MENU_NAVBAR_HEIGHT}`
        }} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Forbidden access</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">You&#39;re not allowed to access this.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) :
    <div />;
}