import React from 'react'
import styled from 'styled-components'

const FormModal = () => {
  return (
    <Wrapper>
      <Form>Edit form</Form>
    </Wrapper>
  )
}

export default FormModal
const Wrapper = styled.div`
        position: fixed;
        width: 100%;
        height: "100%;
        top: 0;
        right: 0;
        display: flex;
        justifyContent: center;
        alignItems: center;
        backgroundColor: rgba(0, 0, 0, 0.2);ter
`
const Form = styled.div`
boxShadow: 0 0 3px #777;
backgroundColor: blue;
width: 500px;
padding: 8px 12px;
borderRadius: 5px;
`