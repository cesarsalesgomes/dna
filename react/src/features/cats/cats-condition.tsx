import { useState } from 'react';

import Cat from './cat';
import Cats from './cat-list';

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