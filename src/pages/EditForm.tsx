import React,{useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import { fetchSingleUser } from '../store/users/thunks'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { FormWrapper } from '../styled'
import { Form } from '../styled'
import { CustomLabel, CustomInput, CustomTextBox , Button, ButtonWrap, Title} from '../styled'
import { InitialProps, UserProps } from '../interfaces'

import { useSelector } from 'react-redux'
const EditForm = () => {
  const dispatch = useDispatch<AppDispatch>() 
  const userDetails = useSelector((state:any) => state.users.users)
  const [user, setUser] = useState<UserProps>({
    name:'',
    email:'',
    bio:'',
    occupation:'',
  })
  const {bio, email, name, occupation} = userDetails
   const {id} = useParams()
  useEffect(()=>{
    console.log(id,'id')
    dispatch(fetchSingleUser(id))
  },[id])
  useEffect(()=>{
    if(userDetails){
      setUser({...user})
    }
  },[userDetails])
  const handleChange = (e:any) =>{
    const {name, value} = e.target
    setUser({...user, [name]:value})
  }
  const handleSubmit = ()=>{

  }
  return (
    <>
    <Title>Edit user</Title>
    <FormWrapper>
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
            <CustomTextBox  onChange={handleChange} value={bio} rows={5}/>
            </div>
            <ButtonWrap>
            <Button >Submit</Button>
            <Button>
              <Link to="/">Cancel</Link>
            </Button>
            </ButtonWrap>
            
        </Form>
    </FormWrapper>
    </>
    
  )
}

export default EditForm