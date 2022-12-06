import { forwardRef, MouseEventHandler, useRef, Ref } from 'react';

interface Props {
  children: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
}

// forwardRef(props, ref)

const MagicButton = forwardRef((
    props: Props,
    ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      onMouseEnter={props.onMouseEnter}
      style={{ backgroundColor: 'blue' }}
      >
      {props.children}
    </button>
  );
});

export { MagicButton };
