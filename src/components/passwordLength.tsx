import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

type PasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
};

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
`;

const LengthDisplay = styled.div`
  font-size: 2rem;
  color: #77dd77;
`;

const RangeInput = styled.input<{ value: number }>`
  width: 100%;
  appearance: none;
  height: 0.25rem;
  background: linear-gradient(
    to right,
    #77dd77 ${(props) => ((props.value - 4) / 16) * 100}%,
    #18171f ${(props) => ((props.value - 4) / 16) * 100}%
  );
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    background: transparent;
    border-radius: 0.25rem;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    background: #e6e6e6; /* Thumb color */
    border-radius: 50%;
    cursor: pointer;
    margin-top: -0.375rem; /* Center the thumb */

    &:hover {
      background: #18171f;
    }
  }

  &::-moz-range-track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    background: transparent;
    border-radius: 0.25rem;
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: #e0e0e0; /* Thumb color */
    border-radius: 50%;
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #77dd77;
    border-radius: 0.25rem;
  }

  &::-ms-fill-upper {
    background: #18171f;
    border-radius: 0.25rem;
  }

  &::-ms-thumb {
    width: 1rem;
    height: 1rem;
    background: #e0e0e0; /* Thumb color */
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default function PasswordLength({
  passwordLength,
  setPasswordLength,
}: PasswordLengthProps) {
  //   function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
  //     setPasswordLength(parseInt(event.target.value, 10));
  //   }

  const [value, setValue] = useState(passwordLength);

  useEffect(() => {
    setValue(passwordLength);
    console.log("🚀 ~ useEffect ~ passwordLength:", passwordLength);
  }, [passwordLength]);

  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.target.value, 10);
    setPasswordLength(newValue);
    setValue(newValue);
  }

  return (
    <Container>
      <Label>
        <div>Password length</div>
        <LengthDisplay>{passwordLength}</LengthDisplay>
      </Label>
      <RangeInput
        type="range"
        id="passwordLength"
        min="4"
        max="20"
        value={value}
        onChange={handlePasswordLengthChange}
      />
    </Container>
  );
}
