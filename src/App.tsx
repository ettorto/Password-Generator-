import './App.css';
import CopyIcon from './assets/images/icon-copy.svg';
import CustomCheckBox from './components/custom-checkbox';
import CustomSlider from './components/custom-slider';
import IconRight from './assets/images/icon-arrow-right.svg';
import { PasswordBarWeak, PasswordBarMedium, PasswordBarStrong, PasswordBarTooWeak, PasswordBarNoPassword } from './components/password-bar';
import { useState, FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #b0b0b0;
`;

const PasswordDisplay = styled.div`
  display: flex;
  padding: 1.5rem 1.5rem;
  align-items: center;
  width: 370px;
  background-color: #24232c;
  justify-content: space-between;
  @media (min-width: 640px) {
    width: 400px;
  }
`;

const PasswordText = styled.h3<{ isGenerated: boolean }>`
  color: ${({ isGenerated }) => (isGenerated ? 'white' : '#b0b0b0')};
`;

const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const CopyText = styled.div`
  color: #a4ffaf;
`;

const OptionsContainer = styled.div`
  margin: 1rem 0;
  width: 370px;
  padding: 1.5rem;
  background-color: #24232c;
  @media (min-width: 640px) {
    width: 400px;
  }
`;

const OptionRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const OptionLabel = styled.h3`
  color: white;
`;

const StrengthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #18171f;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
`;

const StrengthLabel = styled.span`
  color: #817d92;
  text-transform: uppercase;
`;

const StrengthText = styled.span`
  color: white;
  font-weight: 600;
  text-transform: uppercase;
`;

const GenerateButton = styled.button`
  border: 2px solid #a4ffaf;
  background-color: #a4ffaf;
  width: 320px;
  color:#18171f ;
  font-weight: bold;
  padding: 1rem;
  &:hover {
    background-color: #18171f;
    color: #a4ffaf;
    border-color: #a4ffaf;
  }
  @media (min-width: 640px) {
    width: 350px;
  }

`;

const App: FC = () => {
  const [length, setLength] = useState<number>(10);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<string>('No Password');
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = (): void => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let charSet = '';

    if (includeUppercase) charSet += upper;
    if (includeLowercase) charSet += lower;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    setPassword(generatedPassword);
    evaluateStrength(generatedPassword);
    setCopied(false); // Reset copied status on new password generation
  };

  const evaluateStrength = (password: string): void => {
    let strengthIndicator = 0;
    if (password.length >= 8) strengthIndicator++;
    if (includeUppercase) strengthIndicator++;
    if (includeLowercase) strengthIndicator++;
    if (includeNumbers) strengthIndicator++;
    if (includeSymbols) strengthIndicator++;

    if (strengthIndicator <= 2) setStrength('Too Weak');
    else if (strengthIndicator === 3) setStrength('Weak');
    else if (strengthIndicator === 4) setStrength('Medium');
    else if (strengthIndicator === 5) setStrength('Strong');
  };

  const copyToClipboard = (): void => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide confirmation message after 2 seconds
      });
    }
  };

  return (
    <Container>
      <h1 className="text-xl font-semibold mb-6">Password Generator</h1>
      <PasswordDisplay>
        <PasswordText isGenerated={!!password}>{password || 'PTx1f5DaFX'}</PasswordText>
        <CopyContainer onClick={copyToClipboard}>
          {copied && <CopyText>Copied</CopyText>}
          <img src={CopyIcon} alt="Copy Icon" style={{ width: '16px', height: '16px' }} />
        </CopyContainer>
      </PasswordDisplay>
      <OptionsContainer>
        <div className="flex justify-between items-center">
          <OptionLabel>Character Length</OptionLabel>
          <OptionLabel style={{ color: '#A4FFAF' }}>{length}</OptionLabel>
        </div>
        <div className="my-4">
          <CustomSlider value={length} onChange={setLength} />
        </div>
        <div className="my-8">
          <OptionRow>
            <CustomCheckBox checked={includeUppercase} onChange={setIncludeUppercase} />
            <OptionLabel>Include Uppercase Letters</OptionLabel>
          </OptionRow>
          <OptionRow>
            <CustomCheckBox checked={includeLowercase} onChange={setIncludeLowercase} />
            <OptionLabel>Include Lowercase Letters</OptionLabel>
          </OptionRow>
          <OptionRow>
            <CustomCheckBox checked={includeNumbers} onChange={setIncludeNumbers} />
            <OptionLabel>Include Numbers</OptionLabel>
          </OptionRow>
          <OptionRow>
            <CustomCheckBox checked={includeSymbols} onChange={setIncludeSymbols} />
            <OptionLabel>Include Symbols</OptionLabel>
          </OptionRow>
        </div>
        <StrengthContainer>
          <StrengthLabel>Strength</StrengthLabel>
          <div className="flex gap-2 items-center">
            <StrengthText>{strength}</StrengthText>
            {strength === 'No Password' && <PasswordBarNoPassword />}
            {strength === 'Too Weak' && <PasswordBarTooWeak />}
            {strength === 'Weak' && <PasswordBarWeak />}
            {strength === 'Medium' && <PasswordBarMedium />}
            {strength === 'Strong' && <PasswordBarStrong />}
          </div>
        </StrengthContainer>
        <div className="mt-6 mb-4">
          <GenerateButton onClick={generatePassword}>
            <div className="flex justify-center gap-3 items-center">
              <h3 className="">
                Generate
              </h3>
              <img src={IconRight} alt="Icon Right" className="w-4 h-4 hover:bg-[#a4ffaf]" />
            </div>
          </GenerateButton>
        </div>
      </OptionsContainer>
    </Container>
  );
};

export default App;
