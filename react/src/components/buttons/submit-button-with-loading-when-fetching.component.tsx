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
        className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${fetching ? 'text-primary-600' : 'text-white'}`}
      >
        {label}
      </button>
    </div >
  );
}