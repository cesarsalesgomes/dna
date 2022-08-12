import useSignIn from '@features/auth/hooks/sign-in.hook';
import { setAccessTokenToLocalStorage } from '@features/auth/utils/storage.utils';
import { AuthLoginMutationVariables } from '@hooks/auth.hooks';
import useNavigation from '@hooks/navigation.hooks';
import { FormEvent } from 'react';

function getFormUsernameAndPassword(event: FormEvent<HTMLFormElement>): AuthLoginMutationVariables {
  const formData = new FormData(event.currentTarget);

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  return {
    email,
    password
  };
}

export default function useSendLoginForm() {
  const signIn = useSignIn();
  const { sendBackToLastPageTriedToVisit } = useNavigation();

  return async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessToken = await signIn(getFormUsernameAndPassword(event));

    if (accessToken) {
      setAccessTokenToLocalStorage(accessToken);
      sendBackToLastPageTriedToVisit();
    }
  };
}