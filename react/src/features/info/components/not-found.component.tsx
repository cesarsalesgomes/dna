import { HOME_ROUTE } from '@constants/route.constants';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="prose min-h-full px-4 py-16 dark:prose-invert sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
              <p className="mt-1 text-base">Please check the URL in the address bar and try again.</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <NavLink to={HOME_ROUTE}
                className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white no-underline shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Go back home
              </NavLink>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}