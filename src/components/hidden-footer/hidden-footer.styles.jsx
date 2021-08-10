import styled from "styled-components";

export const HiddenFooter = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  display: none;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(26, 31, 63, 0.4);

  @media screen and (max-width: 628px) {
    display: ${(props) => (props.isActive ? "flex" : "none")};
    margin-bottom: 50px;
  }
`;

export const HiddenFooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
