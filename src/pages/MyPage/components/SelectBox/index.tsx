import { Dispatch, SetStateAction, useRef } from 'react';
import { Select, Label } from './style';

interface Props {
  options: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  width: string | number;
}
const SelectBox = ({ options, selectedOption, setSelectedOption, width }: Props) => {
  return (
    <Label width={width}>
      <Select value={selectedOption}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Label>
  );
};
export default SelectBox;
