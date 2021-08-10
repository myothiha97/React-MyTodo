import styled from "styled-components";

export const CheckIcon = styled.img`
  background-image: url("../../assets/icon-check.svg"),
    linear-gradient(120deg, rgb(107, 187, 248), rgb(171, 122, 250));
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const RemoveIcon = styled.img`
  background-image: url("../../assets/icon-cross.svg");
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const CheckIconEmpty = styled.div`
  border-image: linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
    1;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  border-collapse: collapse;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CheckIconFilled = styled.div`
  background-image: linear-gradient(
    120deg,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TodoListLeft = styled.div`
  display: flex;
  width: auto;
  justify-content: flex-start;
  align-items: center;
`;
