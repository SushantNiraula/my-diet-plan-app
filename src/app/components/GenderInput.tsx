// components/GenderInput.tsx
import React from 'react';

interface GenderInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const GenderInput: React.FC<GenderInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>What is your gender?</label>
      <div>
        <label>
          <input
            type="radio"
            value="male"
            checked={value === 'male'}
            onChange={() => onChange('male')}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={value === 'female'}
            onChange={() => onChange('female')}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="other"
            required
            checked={value === 'other'}
            onChange={() => onChange('other')}
          />
          Other
        </label>
      </div>
    </div>
  );
};

export default GenderInput;