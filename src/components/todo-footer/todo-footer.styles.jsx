import styled from "styled-components";

export const FooterMiddle = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 628px) {
    display: none;
  }
`;

export const TodoFooterElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.textColor};
`;

export const FooterText = styled.p`
  cursor: pointer;
`;

export const FooterMiddleLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
