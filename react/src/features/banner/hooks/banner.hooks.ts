import { ITEM_CREATED_WITH_SUCCESS_NOTIFICATION } from '@constants/notifications.constants';
import { bannerMessageAtom } from '@features/banner/atoms';
import { useAtom } from 'jotai';

export function useSetMessageNotificationOnSuccess(message?: string) {
  const [, setBannerMessage] = useAtom(bannerMessageAtom);

  return {
    onSuccess: () => setBannerMessage(message ?? ITEM_CREATED_WITH_SUCCESS_NOTIFICATION)
  };
};