import React ,{useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { Button } from '../styled'
import { postSingleUser } from '../store/users/thunks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { Link } from 'react-router-dom';
import { FormWrapper, Form, CustomTextBox ,Title, CustomLabel, CustomInput} from '../styled';
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
       <Title>Add employimport styled from 'styled-components'ee</Title>
      
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
            <div>
            <Button >Submit</Button>
            <Button>
              <Link to="/">Cancel</Link>
            </Button>
            </div>
            
        </Form>
    </FormWrapper>
    </>
    
  )
}

export default AddUser

