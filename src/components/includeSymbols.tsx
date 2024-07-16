// import React from "react";
import styled from "styled-components";

type IncludeSymbolsProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
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

export default function IncludeSymbols({
  includeSymbols,
  setIncludeSymbols,
}: IncludeSymbolsProps) {
  function handleIncludeSymbolsChange() {
    setIncludeSymbols(!includeSymbols);
  }

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="includeSymbols"
        checked={includeSymbols}
        onChange={handleIncludeSymbolsChange}
      />
      <Label htmlFor="includeSymbols">Include Symbols</Label>
    </Container>
  );
}
