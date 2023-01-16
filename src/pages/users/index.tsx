import React, { useEffect } from 'react'
import { fetchUsers } from '../../store/users/thunks'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch,  } from 'react-redux'
import { AppDispatch } from '../../store'
import { InitialProps } from '../../interfaces'
const UsersList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const users = useSelector((state:InitialProps) => {
        console.log(state, 'state')
        return state
    })
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <Wrapper>
            <Flex>
                <h2>Welcome to the users profile!</h2>
                <Button>
                    <Redirect to="/addUser">Add employee</Redirect>
                </Button>
            </Flex>
            {users.loading ? <p>Loading..</p> : users.error ? <p>Error</p> :<>
            {users.users.length && users.users.map(user =><table className="table">
                <tr>
                    <th className="header">Name</th>
                    <th className="header">Email</th>
                    <th className="header">Occupation</th>
                    <th className="header">Actions</th>
                </tr>
                <tr>
                    <td>{user.name}</td>
                    <td>50</td>
                    <td>Paid</td>
                    <td>
                        <Flex>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </Flex>
                    </td>
                </tr>
            </table> )}
            
            </>}
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