import { LoadingButton } from '@components/loading';
import { useIsMutating, useIsFetching } from '@tanstack/react-query';

export default function SubmitButtonWithLoadingWhenFetching({ label }: { label: string }) {
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();

  const fetching = isFetching || isMutating;

  return (
    // First 'div' needs to be 'relative', ie, positioned, so that 
    // your loading child component understands as the first positioned parent
    <div className="relative">
      { fetching ? <LoadingButton /> : ''}
      <button
        type="submit"
        className={`group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${fetching ? 'text-primary-600' : 'text-white'}`}
      >
        {label}
      </button>
    </div >
  );
}