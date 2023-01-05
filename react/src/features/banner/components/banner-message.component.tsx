import { useErrorHandler } from '@features/error-handler';
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function BannerMessage({ message }: { message: string }) {
  const { hideErrorBannerMessageHandler } = useErrorHandler();

  return (
    <div className="bg-primary-600">
      <div className="mx-auto max-w-7xl p-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-primary-800 p-2">
              <ExclamationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">{message}</span>
              <span className="hidden md:inline">{message}</span>
            </p>
          </div>
          <div className="order-2 shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={hideErrorBannerMessageHandler}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
