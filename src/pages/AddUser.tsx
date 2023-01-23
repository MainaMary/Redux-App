import React ,{useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components'
import { Button } from '../styled'
import { postSingleUser } from '../store/users/thunks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
const AddUser = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        occupation: '',

    })
    const dispatch = useDispatch<AppDispatch>()
    const [bio, setBio] = useState('')
    const [error, setError] = useState('')
    const {name, email, occupation} = formValues
    const handleChange= (e:any) =>{
     const {name, value} = e.target
     setFormValues({...formValues, [name]: value})
    }
    //event: React.ChangeEvent<HTMLInputElement>
    const handleTextBox = (e: any) =>{
      setBio(e.target.value)
    }
    console.log(bio,'formValues')
  const handleSubmit = (e: any) =>{
    e.preventDefault()
     console.log(bio , name, email, occupation)
     const payload = {
      name:name,
      email: email,
      occupation: occupation,
      bio: bio
     }
     dispatch(postSingleUser(payload))
    
  }
  useEffect(()=>{
    setTimeout(()=>{
        setError('')
    }, 2000)
  },[])
  console.log(error)
  return (
    <>
       <Title>Add employee</Title>
      
    <FormWrapper>
    <Title>{error}</Title>
     
        <Form onSubmit={handleSubmit}>
            <div>
            <CustomLabel>Name</CustomLabel>
            <CustomInput  type="text" name="name" onChange={handleChange} value ={name}/>
            </div>
            <div>
            <CustomLabel>Email</CustomLabel>
            <CustomInput  type="text" name="email" onChange={handleChange} value={email}/>
            </div>
            <div>
            <CustomLabel>Occupation</CustomLabel>
            <CustomInput  type="text" name="occupation" onChange={handleChange} value={occupation}/>
            </div>
            <div>
            <CustomLabel>Bio</CustomLabel>
            <CustomTextBox  onChange={handleTextBox} value={bio} rows={5}/>
            </div>
            <Button >Submit</Button>
        </Form>
    </FormWrapper>
    </>
    
  )
}

export default AddUser
const Title = styled.h2`
text-align: center;
margin: 30px 0;
`
const FormWrapper = styled.div`
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
const Form = styled.form`
box-shadow: 0 0 3px #777;
width: 100%;
padding: 24px 32px;
@media screen and (max-width: 768px) {
    padding: 24px 16px;
}
`
const CustomLabel = styled.label`
display: block;
margin: 12px 0; 
`
const CustomInput = styled.input`
width: 100%;
padding: 10px 12px;
border-radius: 5px;
`
const CustomTextBox = styled.textarea `
width: 100%;
`