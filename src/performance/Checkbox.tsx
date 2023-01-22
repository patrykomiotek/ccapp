import { useState } from "react";

interface Props {
  id: string;
  label: string;
  defaultChecked: boolean;
  onChange(): void;
}

export const Checkbox = (props: Props) => {
  const { id, label, defaultChecked = false, onChange } = props;

  const [checked, setChecked] = useState(defaultChecked)
  const handleChange = () => {
    setChecked((value) => !value);
    onChange();
  }

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        data-testid={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
