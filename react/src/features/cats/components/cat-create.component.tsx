import { useForm } from 'react-hook-form';

import useCreateCat from '../hooks/create-cat.hook';

export default function CatCreate() {
  const { register, handleSubmit } = useForm();

  return (
    <form action="#" method="POST" onSubmit={handleSubmit(useCreateCat())}>
      <div className="overflow-hidden bg-gray-200 shadow sm:rounded-md">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-row justify-between gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                {...register('name', { required: true })}
              />
            </div>
            <div className="flex pt-5">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Create
          </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}