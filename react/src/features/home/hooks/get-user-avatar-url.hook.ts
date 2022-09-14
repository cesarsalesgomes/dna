import { DIRECTUS_URL } from '@constants/directus.constants';
import { accessTokenAtom } from '@features/auth/atoms';
import { useUsersMeQuery } from '@hooks/user.hooks';
import { useAtom } from 'jotai';

export default function useGetUserAvatarUrl() {
  const { data } = useUsersMeQuery();
  const [accessToken] = useAtom(accessTokenAtom);

  const quality = 10; // Percentage
  const width = 32; // Pixels
  const height = 32; // Pixels

  if (data) return `${DIRECTUS_URL}/assets/${data.users_me?.avatar?.id}?download=true&quality=${quality}&width=${width}&height=${height}&access_token=${accessToken}`;

  return null; // TODO: return name initials
}