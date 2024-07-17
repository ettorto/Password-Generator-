import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const Bar = styled.div<{ color: string }>`
  width: 8px;
  height: 20px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color }) => (color === '#18171F' ? 'white' : color)};
`;

export const PasswordBarTooWeak: React.FC = () => (
  <BarContainer>
    <Bar color="#ff3c00" />
    <Bar color="#18171F" />
    <Bar color="#18171F" />
    <Bar color="#18171F" />
  </BarContainer>
);

export const PasswordBarWeak: React.FC = () => (
  <BarContainer>
    <Bar color="#FFA500" />
    <Bar color="#ffa601" />
    <Bar color="#18171F" />
    <Bar color="#18171F" />
  </BarContainer>
);

export const PasswordBarMedium: React.FC = () => (
  <BarContainer>
    <Bar color="#FFA500" />
    <Bar color="#FFA500" />
    <Bar color="#FFA500" />
    <Bar color="#18171F" />
  </BarContainer>
);

export const PasswordBarStrong: React.FC = () => (
  <BarContainer>
    <Bar color="#A4FFAF" />
    <Bar color="#A4FFAF" />
    <Bar color="#A4FFAF" />
    <Bar color="#A4FFAF" />
  </BarContainer>
);

export const PasswordBarNoPassword: React.FC = () => (
  <BarContainer>
    <Bar color="#18171F" />
    <Bar color="#18171F" />
    <Bar color="#18171F" />
    <Bar color="#18171F" />
  </BarContainer>
);
