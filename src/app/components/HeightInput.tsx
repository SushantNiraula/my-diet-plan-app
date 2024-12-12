import React from 'react';

interface HeightInputProps {
  feet: number;
  inches: number;
  onFeetChange: (newFeet: number) => void;
  onInchesChange: (newInches: number) => void;
}

const HeightInput: React.FC<HeightInputProps> = ({ feet, inches, onFeetChange, onInchesChange }) => {
  const handleFeetChange = (newFeet: number) => {
    // Ensure that feet don't go below 0
    onFeetChange(Math.max(0, newFeet));
  };

  const handleInchesChange = (newInches: number) => {
    // Inches should be between 0 and 11
    if (newInches >= 0 && newInches <= 11) {
      onInchesChange(newInches);
    }
  };

  const incrementFeet = () => onFeetChange(feet + 1);
  const decrementFeet = () => onFeetChange(feet - 1);

  const incrementInches = () => {
    if (inches < 11) {
      onInchesChange(inches + 1);
    } else {
      incrementFeet();
      onInchesChange(0); // Reset inches to 0 when a new foot is added
    }
  };

  const decrementInches = () => {
    if (inches > 0) {
      onInchesChange(inches - 1);
    } else if (feet > 0) {
      decrementFeet();
      onInchesChange(11); // Set inches to 11 when reducing a foot
    }
  };

  return (
    <div>
      <label>What is your height?</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button type="button" onClick={decrementFeet}>-</button>
        <input
          type="number"
          value={feet}
          onChange={(e) => handleFeetChange(Number(e.target.value))}
          min={0}
          style={{ width: '50px', textAlign: 'center' }}
        />
        <span>ft</span>

        <span style={{ margin: '0 10px' }}>and</span>

        <button type="button" onClick={decrementInches}>-</button>
        <input
          type="number"
          value={inches}
          onChange={(e) => handleInchesChange(Number(e.target.value))}
          min={0}
          max={11}
          required
          style={{ width: '50px', textAlign: 'center' }}
        />
        <span>in</span>

        <button type="button" onClick={incrementInches}>+</button>
      </div>
    </div>
  );
};

export default HeightInput;