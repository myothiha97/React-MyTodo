import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.1px solid ${(props) => props.borderColor};
`;

export default Box;
