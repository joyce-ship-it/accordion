import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import styled from "styled-components";
export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Wrapper onClick={() => setIsOpen((prevVal) => !prevVal)}>
      <h2>{title}</h2>
      <IconWrapper>{isOpen ? <FaMinus /> : <FaPlus />}</IconWrapper>
      {isOpen && <Content>{children}</Content>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #0c0a09;
  margin-top: 1.5rem;
  padding: 1rem;

  color: #c70036;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

const Content = styled.p`
  padding-right: 2rem;
  color: #ec003f;
  font-size: 1.1rem;
  line-height: 1.5;
`;
