import React,{useEffect, useState} from 'react'
import { fetchUsers } from '../store/users/thunks'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppDispatch } from '../store'
import CustomLoader from '../components/CustomLoader'
import Modal from '../components/Modal'
import { UserProps } from '../interfaces'
import { deleteUser } from '../store/users/thunks'

const UsersList = () => {
  const [openModal, setOpenModal] = useState(false)
  const [userDetails, setUserDetails]= useState({})
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector((state:any) => {
    return state.users
})
  useEffect(()=>{
   dispatch(fetchUsers())
  },[])
 
  const handleModal =() =>{
    setOpenModal((prev) => !prev)
  }
  const handleEdit = (details:UserProps) =>{
    console.log('Modal open')
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
                {users.users.length && users.users.slice(15).map(user => <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.occupation}</td>
                    <td>
                        <Flex>
                            <Button onClick={() =>{handleEdit(user), setUserDetails(user)}}>Edit</Button>
                            <Button onClick={()=>handleDelete(user.id)}>Delete</Button>
                        </Flex>
                    </td>
                </tr>)}
               
            </table> 
            
            }
            <>{openModal && <Modal openModal={openModal} handleModal={handleModal} userDetails={userDetails}/>}</>
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
const Redirect = styled(Link)`
color: #FFFF00;
text-decoration: none;

`