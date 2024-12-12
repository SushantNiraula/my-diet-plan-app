// components/WeightInput.tsx
import React from 'react';

interface WeightInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

const WeightInput: React.FC<WeightInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>What is your weight?</label>
      <div>
        <button type="button" onClick={() => onChange(value - 1)}>-</button>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={0}
        />
        <button type="button" onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  );
};

export default WeightInput;