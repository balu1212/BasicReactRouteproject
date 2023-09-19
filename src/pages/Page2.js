import React from "react";
import './Page1.css';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";
import * as yup from 'yup';
function Page2() {
    const [message, setmsg] = useState("");
    const { data } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    })
    const shapeObjects = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
    })
    const { register, handleSubmit, formState: { errors } } = useForm(
        { resolver: yupResolver(shapeObjects) },
    );
    const onSubmit = (msg) => {
        console.log(msg);
        setmsg(data.fact);
    }

    return (
        <div className="parent">
            <div className="ContainerPage2" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div  >
                        <input className="inpput" type="text" placeholder="Enter your name here.."{...register("fullName")} />
                        <p>{errors.fullName?.message}</p>
                    </div>
                    <div>
                        <input className="inpput" type="text" placeholder="Enter your Email here.."{...register("email")} />
                        <p>{errors.email?.message}</p>
                        <input className="submit" type="submit" />
                    </div>
                </form>
                <h4> Hello,Today cat fact is</h4>
                <div className="catfact">
                <p ><b>{message}</b> </p> 
                </div>
              
            </div>
        </div>
    )
}
export default Page2;