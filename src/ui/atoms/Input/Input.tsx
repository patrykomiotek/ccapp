import { forwardRef, Ref, ComponentPropsWithRef } from 'react';

import './Input.module.scss';

interface Props extends ComponentPropsWithRef<'input'> {
// interface Props extends ComponentPropsWithoutRef<'input'> {
  label: string;
  // id: string;
}

const Input = forwardRef((
    { label, id,  ...rest }: Props,
    ref: Ref<HTMLInputElement>
) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        id={id}
        {...rest}
      />
    </div>

  );
});

{/* <Input type="email" id="email" name="user-mail" /> */}
{/* <Input type="text" /> */}

export { Input };
