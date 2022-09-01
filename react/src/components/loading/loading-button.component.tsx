import LoadingSpinner from '@assets/looties/loading-spinner/loading-spinner.lootie';

export default function LoadingButton() {
  return (
    <div className="bg-black w-full h-full opacity-25 absolute z-50 flex justify-center items-center" >
      <LoadingSpinner style={{ height: '100%' }} />
    </div>
  );
}
