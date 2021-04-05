import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


type HelloType = {
    person: string;
}

export const Title: React.FC<HelloType> = ({person}: HelloType) => <StyledTitle>Hello {person}</StyledTitle>
