import styled from "styled-components";

export const EmptyItem = styled.div`
  text-align: center;
  padding: 20px;
  color: ${({ textColor }) => textColor};
`;

export const TodoWrapper = styled.div`
  box-shadow: 0 0 5px rgba(26, 31, 63, 0.4);
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;
