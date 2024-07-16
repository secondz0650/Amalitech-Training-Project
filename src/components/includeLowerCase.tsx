// import React from "react";
import styled from "styled-components";

type IncludeLowercaseProps = {
  includeLowercase: boolean;
  setIncludeLowercase: (include: boolean) => void;
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

export default function IncludeLowercase({
  includeLowercase,
  setIncludeLowercase,
}: IncludeLowercaseProps) {
  function handleIncludeLowercaseChange() {
    setIncludeLowercase(!includeLowercase);
  }

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="includeLowercase"
        checked={includeLowercase}
        onChange={handleIncludeLowercaseChange}
      />
      <Label htmlFor="includeLowercase">Include Lowercase Letters</Label>
    </Container>
  );
}
