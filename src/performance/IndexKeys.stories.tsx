import { useState, useId } from 'react';

export default {
  title: 'Rendering/IndexKeys',
};

export const ReactKeysIndex = () => {
  const [items, setItems] = useState([
    { id: useId(), name: 'A' },
    { id: useId(), name: 'B' }
  ])
  const newId = useId();
  const addItem = () => {
    setItems([{ id: newId, name: 'C' }, ...items])
  }

  return <>
    <h3>index keys</h3>
    {items.map((i, idx) => <div key={idx}>
      <div>
        <span>{i.id}</span>
        <input
          type="text"
          id={i.id + ''}
        />
      </div>
    </div>)}
    <h3>id keys</h3>
    {items.map((i, idx) => <div key={i.id}>
      <div>
        <span>{i.id}</span>
        <input
          type="text"
          id={i.id + ''}
        />
      </div>
    </div>)}
    <div>
      <button onClick={addItem}>add</button>
    </div>
  </>
}
