import { useSetMessageNotificationOnSuccess } from '@features/banner';
import { Create_Cat_Input, useCreateCatMutation } from '@hooks/cat.hooks';
import { invalidateQueriesOnSuccess } from '@utils/react-query.utils';

export default function useCreateCat() {
  const { mutate } = useCreateCatMutation(invalidateQueriesOnSuccess(['findAllCats']));
  const setMessageNotificationOnSuccess = useSetMessageNotificationOnSuccess();

  return (data: Create_Cat_Input) => mutate({ data }, setMessageNotificationOnSuccess);
}