// components/AgeInput.tsx
import React from 'react';

interface AgeInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

const AgeInput: React.FC<AgeInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>What is your age?</label>
      <div>
        <button type="button" onClick={() => onChange(value - 1)}>-</button>
        <input
          type="number"
          value={value}
          required
          onChange={(e) => onChange(Number(e.target.value))}
          min={0}
          max={100}
        />
        <button type="button" onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  );
};

export default AgeInput;