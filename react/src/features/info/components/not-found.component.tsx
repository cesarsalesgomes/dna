import { HOME_ROUTE } from '@constants/route.constants';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="prose my-4 dark:prose-invert">
      <h1>Page not Found</h1>
      <p>
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <NavLink
        to={HOME_ROUTE}
        className='text-sm font-medium text-primary-600 hover:text-primary-500'>
        Go back home
      </NavLink>
    </div >
  );
}