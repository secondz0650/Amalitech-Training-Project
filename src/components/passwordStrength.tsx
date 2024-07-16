// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #18171f;
  margin: 1rem 0;
`;

const Text = styled.p`
  color: #9ca3af; /* Tailwind's text-gray-500 */
  font-weight: 500;
`;

const StrengthText = styled.p`
  margin: 0;
`;

const Flex = styled.p`
  display: flex;
  gap: 1rem;
`;

const BarsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Bar = styled.span<{ color: string }>`
  width: 0.5rem;
  height: 1.25rem;
  font-weight: bold;
  font-size: 1.125rem;
  background-color: ${({ color }) => color};
  border: ${({ color }) =>
    color === "#18171F" ? "1px solid white" : `1px solid ${color}`};
`;

export const PasswordStrengthBar = ({ strength }: { strength: number }) => {
  const getColor = (index: number) => {
    if (strength >= index + 1) {
      switch (strength) {
        case 1:
          return "#F64A4A";
        case 2:
          return "#FB7C58";
        case 3:
          return "#F8CD65";
        case 4:
          return "#A4FFAF";
        default:
          return "#F64A4A";
      }
    } else {
      return "#18171F";
    }
  };

  const getStrengthText = () => {
    if (strength === 1) {
      return "TOO WEAK";
    } else if (strength === 2) {
      return "WEAK";
    } else if (strength === 3) {
      return "MEDIUM";
    } else if (strength === 4) {
      return "STRONG";
    } else {
      return "";
    }
  };

  return (
    <Container>
      <Text>STRENGTH</Text>
      <Flex className="">
        <StrengthText>{getStrengthText()}</StrengthText>
        <BarsContainer>
          {[...Array(4)].map((_, index) => (
            <Bar key={index} color={getColor(index)} />
          ))}
        </BarsContainer>
      </Flex>
    </Container>
  );
};
