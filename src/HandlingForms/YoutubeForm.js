import React from "react";
import {useForm} from "react-hook-form"
import "./styles/YoutubeForm.css";
import { DevTool } from "@hookform/devtools";

const YoutubeForm = () => {
    const form = useForm();
    const {register, formState: { errors }, control, handleSubmit} = form;
    const onSubmit = (data) => {
      console.log('Form Submitted',data);
    }
  return (
    <>
      <div className="col-md-6 youtubeForm">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>YoutubeForm</h1>
          <div className="form-group mt-2">
            <label className="mb-2">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
             {...register("email",{
              required : {
                value : true,
                message : 'Email is required'
              },
              pattern : {
                value :   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message : 'Invalid email address'
              },
              validate : {
                notAdmin: (fieldValue) => {
                  return(
                    fieldValue !== 'admin@example.com' || 
                    "Enter a different  email address"
                  )
                },
                notBlackListed : (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                  )
                }
              }
             })}
             
            />
            <p className="errorText">{errors?.email?.message}</p>
            
          </div>
          <div className="form-group mt-2">
            <label className="mb-2">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
             {...register("password",{
              required : {
                value : true,
                message : 'Password is required'
              },
             })}

            />
            <p className="errorText">{errors?.password?.message}</p>
          </div>
          <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default YoutubeForm;
