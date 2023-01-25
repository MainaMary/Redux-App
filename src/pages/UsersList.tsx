import React,{useEffect, useState} from 'react'
import { fetchUsers } from '../store/users/thunks'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../store'
import CustomLoader from '../components/CustomLoader'
import Modal from '../components/Modal'
import { UserProps } from '../interfaces'
import { deleteUser } from '../store/users/thunks'

import { Redirect } from '../styled'


const UsersList = () => {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const navigation= useNavigate()
  const users = useSelector((state:any) => {
    return state.users
})
  useEffect(()=>{
   dispatch(fetchUsers())
  },[])
 
  const handleModal =() =>{
    setOpenModal((prev) => !prev)
    console.log('open modal')
  }
  console.log(openModal)
  const handleEdit = (details:UserProps) =>{
    console.log('Modal open')
    console.log(details,'details');
    
   
  }
  const handleDelete = (userId:string) =>{
    console.log(userId,'userId');
    dispatch(deleteUser(userId))
  }
 
   console.log(openModal)
  return (
    <Wrapper>
            <Flex>
                <h2>Welcome to the users profile!</h2>
                <Button>
                    <Redirect to="/addUser">Add employee</Redirect>
                </Button>
            </Flex>
            {users.loading ? <Loader><CustomLoader/></Loader> : users.error ? <p>Error</p> :
            
            <table className="table">
                <tr>
                    <th className="header">Name</th>
                    <th className="header">Email</th>
                    <th className="header">Occupation</th>
                    <th className="header">Actions</th>
                </tr>
                {users.users.length && users.users.slice(0,15).map(user => <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.occupation}</td>
                    <td>
                        <Flex>
                            <Button onClick={() => navigation(`/edit/${user.id}`)}>Edit</Button>
                            <Button onClick={()=>handleDelete(user.id)}>Delete</Button>
                        </Flex>
                    </td>
                </tr>)}
               
            </table> 
            
            }
            
        </Wrapper>
  )
}


export default UsersList
const Wrapper = styled.div`
padding: 0px 64px;
@media screen and (max-width: 768px) {
  padding: 0 32px;
}
`
const Flex = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
@media screen and (max-width: 768px) {
  flex-direction: column;
  text-align: center;
}
`
const Loader = styled.div`
text-align: center;
margin:auto;
display: flex;
justify-content:center;
`
const Button = styled.div`
text-transform: upper-case;
font-size: 18px;
text-align: center;
padding: 12px 16px;
color:#FFFF00;
background-color:#000080;
border-radius: 10px;
`
