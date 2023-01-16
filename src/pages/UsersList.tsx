import React,{useEffect} from 'react'
import { fetchUsers } from '../store/users/thunks'
import {connect} from "react-redux"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const UsersList = ({userData, fetchUsers}:any) => {
  useEffect(()=>{
    fetchUsers()
  },[])
  console.log(userData,'users')
  return (
    <Wrapper>
      <Flex>
        <h2>Welcome to the users profile!</h2>
        <Button>
          <Redirect to="/addUser">Add employee</Redirect>
        </Button>
      </Flex>
      <table className="table">
          <tr>
            <th className="header">Name</th>
            <th className="header">Email</th>
            <th className="header">Occupation</th>
            <th className="header">Actions</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>50</td>
            <td>Paid</td>
            <td>
              <Flex>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Flex>
            </td>
          </tr>
        </table>
    </Wrapper>
  )
}
const mapStateToProps = (state: any) =>{
  return {
    userData: state.users
  }

}
const mapDispatchToProps =(dispatch:any) =>{
  return {
    fetchUsers : () =>dispatch(fetchUsers())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
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
const Button = styled.div`
text-transform: upper-case;
font-size: 18px;
text-align: center;
padding: 12px 16px;

background-color:#000080;
border-radius: 10px;
`
const Redirect = styled(Link)`
color: #fff;
text-decoration: none;

`