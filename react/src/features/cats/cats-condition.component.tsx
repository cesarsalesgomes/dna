import { useState } from 'react';

import Cats from './cat-list.component';
import Cat from './cat.component';

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