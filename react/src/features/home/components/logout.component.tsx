import { useSignOut } from '@features/auth';
import { Link } from 'react-router-dom';

export default function Logout() {
  const signOut = useSignOut();

  return (
    <Link to='/login' className='block px-4 py-2 text-sm text-gray-700' onClick={signOut}>Sign out</Link >
  );
}