import LoadingSpinner from './spinner/loading-spinner.component';

export default function LoadingButton() {
  return (
    <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black opacity-25" >
      <LoadingSpinner tailwindClasses='h-6 w-6' />
    </div>
  );
}
