import { lazy, useState } from 'react';

const Cats = lazy(() => import('./cat-list.component'));
const Cat = lazy(() => import('./cat.component'));

export default function CatsCondition() {
  const [catId, setCatId] = useState(-1);

  return (
    catId > -1 ? (
      <Cat catId={catId} setCatId={setCatId} />
    ) : (
      <Cats setCatId={setCatId} />
    )
  );
}