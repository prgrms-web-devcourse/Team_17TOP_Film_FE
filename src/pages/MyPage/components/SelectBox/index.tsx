import { Dispatch, KeyboardEvent, MouseEvent, SetStateAction, useRef } from 'react';
import { Select, Label, SelectItemWrapper, SelectItem } from './style';
import useSelect from './useSelect';

interface Props {
  options: string[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  width: string | number;
  maxHeight: number;
  name: string;
  handleSelectOptionClick: any;
  [x: string]: any;
}

const SelectBox = ({
  options,
  selectedOption,
  setSelectedOption,
  width,
  maxHeight,
  name,
  handleSelectOptionClick,
  ...props
}: Props) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const [clickSelectedBox, setClickSelectedBox] = useSelect(labelRef);

  const handleOpenSelectBox = (e: MouseEvent) => {
    e.preventDefault();
    setClickSelectedBox(true);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!e.code) return;
    if (e.code === 'Enter' || e.code === 'Space') {
      setClickSelectedBox(true);
    }
  };

  const handleSelectBox = (e: any, option?: string) => {
    const optionValue = option ? option : e.target.value;
    setSelectedOption(optionValue);

    setClickSelectedBox(false);
    handleSelectOptionClick(optionValue);
  };

  return (
    <Label
      {...props}
      tabIndex={0}
      area-label={name}
      width={width}
      ref={labelRef}
      onKeyDown={handleKeyDown}
      onMouseDown={handleOpenSelectBox}
    >
      <Select value={selectedOption} onChange={handleSelectBox}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      {clickSelectedBox && (
        <SelectItemWrapper maxHeight={maxHeight}>
          {options.map((option) => (
            <SelectItem
              key={option}
              onClick={(e) => handleSelectBox(e, option)}
              isSelected={option === selectedOption}
            >
              {option}
            </SelectItem>
          ))}
        </SelectItemWrapper>
      )}
    </Label>
  );
};
export default SelectBox;
