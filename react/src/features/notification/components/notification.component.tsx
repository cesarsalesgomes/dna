import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

import { useNotificationStore } from '../stores';

import NotificationIcon from './notification-icon.component';
import NotificationLabel from './notification-label.component';

export default function Notification() {
  const { message, setMessageAndType } = useNotificationStore((state) => state);

  return (
    message ?
      <>
        {/* Global notification live region, render this permanently at the end of the document */}
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 z-10 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={!!message}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <NotificationIcon />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <NotificationLabel />
                      <p className="mt-1 text-sm text-gray-500">{message}</p>
                    </div>
                    <div className="ml-4 flex shrink-0">
                      <button
                        type="button"
                        className="focus:ring-indigo-500 inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        onClick={() => setMessageAndType('', null)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </>
      : <div />
  );
}
