import * as Checkbox from '@radix-ui/react-checkbox';
import styled from 'styled-components';
import CheckboxIcon from '../assets/images/icon-check.svg';

const StyledCheckboxRoot = styled(Checkbox.Root)`
  display: flex;
  height: 25px;
  width: 25px;
  background-color: #24232c;
  border: 1px solid #a4ffaf;
  appearance: none;
  align-items: center;
  justify-content: center;
  outline: none;

  &[data-state='checked'] {
    background-color: #a4ffaf;
  }
`;

const StyledCheckboxIndicator = styled(Checkbox.Indicator)`
  color: black;
`;

const CustomCheckBox = ({ checked, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <StyledCheckboxRoot id="c1" checked={checked} onCheckedChange={onChange}>
      <StyledCheckboxIndicator>
        <img src={CheckboxIcon} alt="Checkbox Icon" style={{ width: '16px', height: '16px' }} />
      </StyledCheckboxIndicator>
    </StyledCheckboxRoot>
  </div>
);

export default CustomCheckBox;
