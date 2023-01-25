import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    occupation: "",
  });
  const [loading, setLoading]=useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const { name, email, occupation } = formValues;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setError('')
    
  };
  const state = useSelector((state:any)=> state)
  console.log(state.users,'post user')
  //event: React.ChangeEvent<HTMLInputElement>
  const handleTextBox = (e: any) => {
    setBio(e.target.value);
    setError('')
  };
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(bio, name, email, occupation);
    const payload = {
      name: name,
      email: email,
      occupation: occupation,
      bio: bio,
    };
    if(!name.trim() || !email || !bio ||!occupation){
     setError('Please provide all the details')
    }else{
      dispatch(postSingleUser(payload));
      toast.success('User registered successfully!')
      setFormValues({name: "",
      email: "",
      occupation: "",})
      setBio('')
      setError('')
    }
   
   };
   
   useEffect(() => {
    setTimeout(() => {
      setError("");
    
    }, 500);
  }, []);
  
  console.log(error);
  return (
    <>
      <Title>Add user</Title>

      <FormWrapper>
      

        <Form onSubmit={handleSubmit}>
        <p style={{color:'red', textAlign:'center'}}>{error}</p>
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
            <Button disabled={loading}>Submit</Button>
            <Button>
              <Redirect to="/" >Go back</Redirect>
            </Button>
          </ButtonWrap>
        </Form>
      </FormWrapper>
    </>
  );
};

export default AddUser;
