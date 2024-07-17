import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px;
`;

const StyledSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: #18171F;
  outline: none;
  border-radius: 4px;
  transition: background 0.2s;
  position: relative;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: linear-gradient(to right, #A4FFAF 0%, #A4FFAF var(--value), #18171F var(--value), #18171F 100%);
    border-radius: 4px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: linear-gradient(to right, #A4FFAF 0%, #A4FFAF var(--value), #18171F var(--value), #18171F 100%);
    border-radius: 4px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
    transition: background-color 0.2s;
    position: relative;
    z-index: 1; 
    margin-top: -9px;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
    transition: background-color 0.2s;
    position: relative;
    z-index: 1; 
    margin-top: -9px; 
  }

  &:focus::-webkit-slider-thumb {
    background: #18171F;
    border: 1px solid #A4FFAF;
  }

  &:focus::-moz-range-thumb {
    background: #18171F;
    border: 1px solid #A4FFAF;
  }
`;

const CustomSlider = ({ value, onChange }) => {
  const handleSliderChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <SliderContainer>
      <StyledSlider
        type="range"
        min="0"
        max="20"
        value={value}
        onChange={handleSliderChange}
        style={{ '--value': `${(value / 20) * 100}%` }}
      />
    </SliderContainer>
  );
};

export default CustomSlider;
