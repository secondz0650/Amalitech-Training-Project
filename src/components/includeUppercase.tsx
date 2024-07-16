import styled from "styled-components";

type IncludeUppercaseProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (include: boolean) => void;
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

export default function IncludeUppercase({
  includeUppercase,
  setIncludeUppercase,
}: IncludeUppercaseProps) {
  function handleIncludeUppercaseChange() {
    setIncludeUppercase(!includeUppercase);
  }

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="includeUppercase"
        checked={includeUppercase}
        onChange={handleIncludeUppercaseChange}
      />
      <Label htmlFor="includeUppercase">Include Uppercase Letters</Label>
    </Container>
  );
}
