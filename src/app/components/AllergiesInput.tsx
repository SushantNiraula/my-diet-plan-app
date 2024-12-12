// // components/AllergiesInput.tsx
// import React from 'react';

// interface AllergiesInputProps {
//   value: boolean;
//   onChange: (newValue: boolean) => void;
// }

// const AllergiesInput: React.FC<AllergiesInputProps> = ({ value, onChange }) => {
//   return (
//     <div>
//       <label>Do you have any allergies?</label>
//       <div>
//         <input type="radio" onClick={() => onChange(true)}>Yes</input>
//         <input type="radio" onClick={() => onChange(false)}>No</input>
//       </div>
//     </div>
//   );
// };

// export default AllergiesInput;

// app/survey/components/AllergiesInput.tsx
import React from 'react';

interface AllergiesInputProps {
  value: boolean | null;
  onChange: (newValue: boolean) => void;
}

const AllergiesInput: React.FC<AllergiesInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-800 mb-4">
        Do you have any allergies?
      </label>
      <div className="flex space-x-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-md text-lg font-medium border transition ${
            value === true
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-100'
          }`}
          onClick={() => onChange(true)}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-md text-lg font-medium border transition ${
            value === false
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-100'
          }`}
          onClick={() => onChange(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default AllergiesInput;