import './loading-spinner.component.css';

export default function LoadingSpinner({ tailwindClasses }: { tailwindClasses: string }) {
  return (
    <div className={`spinner ${tailwindClasses}`} />
  );
}