import styled from "styled-components";
export const Button = styled.button.attrs(
  (props: { primary: boolean }) => props
)`
  padding: ${(props) => (props.primary ? "12px 16px" : "10px 12px")};
  text-align: center;
  cursor: pointer;
  color: #fff;
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  background: #000080;
  margin: 12px 0;
  font-weight: 500;
  width: ${(props) => (props.primary ? "20%" : "60%")};
  border: 2px solid blue;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.primary ? "100%" : "100%")};
  }
`;
