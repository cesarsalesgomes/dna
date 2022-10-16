import { useFindAllBirdsQuery } from '@hooks/bird.hooks';

export default function Birds() {
  const { data } = useFindAllBirdsQuery();

  return (
    <div className="prose flex flex-col dark:prose-invert">
      <h1 className="my-4">Birds</h1>
    </div>
  );
}
