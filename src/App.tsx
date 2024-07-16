import { useState } from "react";

import { generatePassword } from "./utils/generatePassword";
import { AiOutlineCopy } from "react-icons/ai";

import styled from "styled-components";
import PasswordLength from "./components/passwordLength";
import IncludeUppercase from "./components/includeUppercase";
import IncludeLowercase from "./components/includeLowerCase";
import IncludeNumbers from "./components/includeNumbers";
import IncludeSymbols from "./components/includeSymbols";
import { PasswordStrengthBar } from "./components/passwordStrength";

const AppContainer = styled.div`
  font-family: "JetBrains Mono", monospace;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const PasswordDisplay = styled.div`
  background-color: #18171f;
  color: white;
  padding: 1rem;
  break-word: break-all;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  margin-bottom: 1rem;
`;

const CopyContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  border: none;
  outline: none;

  .text {
    color: #77dd77;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    text-transform: uppercase;
  }
`;

const CopyButton = styled.div`
  &:hover {
    color: #77dd77;
  }
`;

const ControlsContainer = styled.div`
  width: 20rem;
  background-color: #18171f;
  padding: 1rem;
`;

const GenerateButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #77dd77;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  border: 1px solid transparent;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    border-color: #77dd77;
    background-color: #18171f;
    color: #77dd77;
  }
`;

const PasswordField = styled.input<{ value: string }>`
  width: 100%;
  appearance: none;
  /* height: 0.25rem; */
  background: #18171f;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function App() {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [strength, setStrength] = useState(0);
  const [copyMessage, setCopyMessage] = useState<string>("");

  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword);
    setStrength(getPasswordStrength(newPassword));
    console.log(
      "🚀 ~ handleGeneratePassword ~ newPassword:",
      getPasswordStrength(newPassword)
    );
  }
  function handleCopyClick() {
    if (password) {
      // navigator.clipboard.writeText(password);
      navigator.clipboard.writeText(password);
      setCopyMessage("Copied!");
      setTimeout(() => setCopyMessage(""), 2000);
    }
  }

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    return strength;
  };

  return (
    <AppContainer>
      <p>Password Generator</p>
      <PasswordDisplay>
        {/* <div className="text-xl">{password}</div> */}
        <PasswordField
          type="text"
          placeholder="P4$5W0rD!"
          disabled
          value={password}
        />
        <CopyContainer onClick={handleCopyClick}>
          <span className="text">{copyMessage}</span>{" "}
          <CopyButton className="icon">
            <AiOutlineCopy />
          </CopyButton>
        </CopyContainer>
      </PasswordDisplay>

      <ControlsContainer>
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUppercase
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
        />
        <IncludeLowercase
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
        />
        <IncludeNumbers
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
        />
        <IncludeSymbols
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <PasswordStrengthBar strength={strength} />
        <GenerateButton onClick={handleGeneratePassword}>
          generate
        </GenerateButton>
      </ControlsContainer>
    </AppContainer>
  );
}
