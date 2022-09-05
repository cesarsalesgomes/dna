import LoadingSpinner from '@assets/looties/loading-spinner/loading-spinner.lootie';

export default function LoadingButton() {
  return (
    <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black opacity-25" >
      <LoadingSpinner style={{ height: '100%' }} />
    </div>
  );
}
