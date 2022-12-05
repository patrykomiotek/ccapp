import { MouseEventHandler, useState } from 'react';

import { v4 as uuidv4 } from 'uuid'; // @types/uuid

const Generator = () => {
  // useState -> [var, fn]
  // const [id, setId] = useState<number>(0);
  const [id, setId] = useState<string>(uuidv4());

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setId(uuidv4());
  }

  return (
    <> {/* React.Fragment */}
      <p>Tekst {id}</p>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export { Generator };
