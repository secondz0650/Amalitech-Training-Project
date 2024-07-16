// import React from "react";
import styled from "styled-components";

type IncludeNumbersProps = {
  includeNumbers: boolean;
  setIncludeNumbers: (include: boolean) => void;
};

const Container = styled.div`
  margin-bottom: 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
`;

export default function IncludeNumbers({
  includeNumbers,
  setIncludeNumbers,
}: IncludeNumbersProps) {
  function handleIncludeNumbersChange() {
    setIncludeNumbers(!includeNumbers);
  }

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="includeNumbers"
        checked={includeNumbers}
        onChange={handleIncludeNumbersChange}
      />
      <Label htmlFor="includeNumbers">Include Numbers</Label>
    </Container>
  );
}
