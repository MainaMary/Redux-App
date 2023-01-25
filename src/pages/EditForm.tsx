import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { FormWrapper, Redirect } from "../styled";
import { Form } from "../styled";
import {
  CustomLabel,
  CustomInput,
  CustomTextBox,
  Button,
  ButtonWrap,
  Title,
} from "../styled";
import { UserProps , initialStateProps} from "../interfaces";
import { editUser } from "../store/users/thunks";

const EditForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector((state: initialStateProps) => state.users.users);
  const [user, setUser] = useState<UserProps>({
    name: "",
    email: "",
    bio: "",
    occupation: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const currentUser = userDetails.find((label) => label.id === id);
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const res = dispatch(editUser(id, user));
    console.log(res,'res')
    toast.success('User edited successfully!')
  };
  console.log(user, "user");

  return (
    <>
      <Title>Edit user</Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <div>
            <CustomLabel>Name</CustomLabel>
            <CustomInput
              type="text"
              name="name"
              onChange={handleChange}
              value={user.name || ""}
            />
          </div>
          <div>
            <CustomLabel>Email</CustomLabel>
            <CustomInput
              type="text"
              name="email"
              onChange={handleChange}
              value={user.email || ""}
            />
          </div>
          <div>
            <CustomLabel>Occupation</CustomLabel>
            <CustomInput
              type="text"
              name="occupation"
              onChange={handleChange}
              value={user.occupation || ""}
            />
          </div>
          <div>
            <CustomLabel>Bio</CustomLabel>
            <CustomTextBox
              onChange={handleChange}
              value={user.bio || ""}
              rows={5}
              name="bio"
            />
          </div>
          <ButtonWrap>
            <Button>Submit</Button>
            <Button>
              <Redirect to="/">Go back</Redirect>
            </Button>
          </ButtonWrap>
        </Form>
      </FormWrapper>
    </>
  );
};

export default EditForm;
