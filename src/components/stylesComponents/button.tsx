import { styled } from "solid-styled-components";

const Btn  = styled("button")`
  background-color: red;
  border-radius: ${(props:any) => props.size}px;
`;

export { Btn as Button };