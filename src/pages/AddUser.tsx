import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { postSingleUser } from "../store/users/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonWrap, Redirect } from "../styled";
import { AppDispatch } from "../store";
import {
  FormWrapper,
  Form,
  CustomTextBox,
  Title,
  CustomLabel,
  CustomInput,
} from "../styled";
const AddUser = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    occupation: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const { name, email, occupation } = formValues;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const state = useSelector((state:any)=> state)
  console.log(state.users.loading,'post user')
  //event: React.ChangeEvent<HTMLInputElement>
  const handleTextBox = (e: any) => {
    setBio(e.target.value);
  };
  console.log(bio, "formValues");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(bio, name, email, occupation);
    const payload = {
      name: name,
      email: email,
      occupation: occupation,
      bio: bio,
    };
    dispatch(postSingleUser(payload));
    toast.success("User created successfully")
    
  };
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2000);
  }, []);
  console.log(error);
  return (
    <>
      <Title>Add user</Title>

      <FormWrapper>
        <Title>{error}</Title>

        <Form onSubmit={handleSubmit}>
          <div>
            <CustomLabel>Name</CustomLabel>
            <CustomInput
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <CustomLabel>Email</CustomLabel>
            <CustomInput
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <CustomLabel>Occupation</CustomLabel>
            <CustomInput
              type="text"
              name="occupation"
              onChange={handleChange}
              value={occupation}
            />
          </div>
          <div>
            <CustomLabel>Bio</CustomLabel>
            <CustomTextBox onChange={handleTextBox} value={bio} rows={5} />
          </div>
          <ButtonWrap>
            <Button>{state.users.loading ?'loading': 'Submit'}</Button>
            <Button>
              <Redirect to="/">Cancel</Redirect>
            </Button>
          </ButtonWrap>
        </Form>
      </FormWrapper>
    </>
  );
};

export default AddUser;
