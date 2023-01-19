import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { UserProps } from "../interfaces";


interface Props {
    openModal: boolean;
    handleModal: () => void;

    userDetails: any;
}
const Modal = ({ openModal, handleModal, userDetails }: Props) => {
    if (!openModal) return null;
   console.log(userDetails,'userDetails')
    const [itemDetails, setItemDetails] = useState(userDetails);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [bio, setBio] = useState('');
    

    useEffect(() => {
        if (userDetails) {
            setName(userDetails.name);
            setEmail(userDetails.email);
            setOccupation(userDetails.occupation);
            setBio(userDetails.bio);
           
        }
    }, []);
    const handleSubmit = (e: any) => {
        e.preventDefault();
       
        handleModal();
    };
    return (
        <Wrapper

        >

            <Form
               
                onClick={(e:any) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between">
                    <h1 className="text-gray-700 font-bold">Edit details</h1>
                    <p
                        className="font-bold text-xl text-gray-700 cursor-pointer"
                        onClick={handleModal}
                    >
                        x
                    </p>
                </div>

            </Form>
        </Wrapper>
    );
};

export default Modal;

const Wrapper = styled.div`
        position: fixed;
        width: 100%;
        height: "100%;
        top: 0;
        right: 0;
        display: flex;
        justifyContent: center;
        alignItems: center;
        backgroundColor: rgba(0, 0, 0, 0.2);
`
const Form = styled.form`
boxShadow: 0 0 3px #777;
backgroundColor: #fff;
width: 500px;
padding: 8px 12px;
borderRadius: 5px;
`