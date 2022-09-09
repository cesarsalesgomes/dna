import { useSignOut } from '@features/auth';
import { NavLink } from 'react-router-dom';

export default function Logout() {
  const signOut = useSignOut();

  return (
    <NavLink to='./login' className='block px-4 py-2 text-sm text-gray-700' onClick={signOut}>Sign out</NavLink >
  );
}