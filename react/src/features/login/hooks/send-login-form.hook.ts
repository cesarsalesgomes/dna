import useAuth from '@features/auth/hooks/auth.hook';
import { AuthLoginMutationVariables } from '@hooks/auth.hooks';
import { FormEvent } from 'react';
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

function getFormUsernameAndPassword(event: FormEvent<HTMLFormElement>): AuthLoginMutationVariables {
  const formData = new FormData(event.currentTarget);

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  return {
    email,
    password
  };
}

function sendBackToLastPageTriedToVisit(navigate: NavigateFunction, location: Location) {
  const from = location.state?.from?.pathname || '/';

  return () => navigate(from, { replace: true });
}

export default function useSendLoginForm() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    auth.signIn(getFormUsernameAndPassword(event), sendBackToLastPageTriedToVisit(navigate, location));
  };
}