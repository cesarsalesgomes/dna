import { fetchesBeingPerformedAtom } from '@atoms/fetches-being-performed.atom';
import { LoadingButton } from '@components/loading';
import { useAtom } from 'jotai';

export default function SubmitButtonWithLoadingWhenFetching({ label }: { label: string }) {
  const [fetchesBeingPerformed] = useAtom(fetchesBeingPerformedAtom);

  return (
    // First 'div' needs to be 'relative', ie, positioned, so that 
    // your loading child component understands as the first positioned parent
    <div className="relative">
      {fetchesBeingPerformed > 0 ? <LoadingButton /> : ''}
      <button
        type="submit"
        className={`group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${fetchesBeingPerformed > 0 ? 'text-primary-600' : 'text-white'}`}
      >
        {label}
      </button>
    </div >
  );
}