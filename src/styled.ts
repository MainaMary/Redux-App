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
export const Title = styled.h2`
text-align: center;
margin: 30px 0;
`
export const FormWrapper = styled.div`
display: flex;
margin-top:64px;
justify-content: center;
width: 45%;
margin:auto;
border-radius: 10px;
@media screen and (max-width: 768px) {
    width: 70%;
}
`
export const Form = styled.form`
box-shadow: 0 0 3px #777;
width: 100%;
padding: 24px 32px;
@media screen and (max-width: 768px) {
    padding: 24px 16px;
}
`
export const CustomLabel = styled.label`
display: block;
margin: 12px 0; 
`
export const CustomInput = styled.input`
width: 100%;
padding: 10px 12px;
border-radius: 5px;
`
export const CustomTextBox = styled.textarea `
width: 100%;
`
export const ButtonWrap = styled.div`
display:flex;
justify-content:space-between;
`