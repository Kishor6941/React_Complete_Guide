import React from "react";
import {useFieldArray, useForm} from "react-hook-form"
import "./styles/YoutubeForm.css";
import { DevTool } from "@hookform/devtools";

const YoutubeForm = () => {
    const form = useForm({
      defaultValues : {
        UserName : '',
        email : '',
        channelName : '',
        social : {
          twitter : '',
          facebook : ''
        },
        phoneNumber : ['',''],
        phNumbers : [{number : ''}]
    }
  });
    const {register, formState: { errors }, control, handleSubmit} = form;

   const {fields,append, remove} =  useFieldArray({
      name : 'phNumbers',
      control
    })

    const onSubmit = (data) => {
      console.log('Form Submitted',data);
    }
  return (
    <>
      <div className="col-md-6 youtubeForm">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>YoutubeForm</h1>
        <div className="form-group mt-2">
            <label className="mb-2">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter UserName"
             {...register("UserName",{
              required : {
                value : true,
                message : 'UserName is required'
              },
             })}

            />
            <p className="errorText">{errors?.UserName?.message}</p>
          </div>
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
            <label className="mb-2">Channel Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Channel Name"
             {...register("channelName",{
              required : {
                value : true,
                message : 'Channel Name is required'
              },
             })}

            />
            <p className="errorText">{errors?.channelName?.message}</p>
          </div>

          <div className="form-group mt-2">
            <label className="mb-2">Twitter</label>
            <input
              type="text"
              placeholder="Twitter"
              className="form-control"
             {...register("social.twitter",{
              required : {
                value : true,
                message : 'Twitter is required'
              }
             })}
            />
            <p className="errorText">{errors?.social?.twitter?.message}</p>
          </div>

          <div className="form-group mt-2">
            <label className="mb-2">Facebook</label>
            <input
              type="text"
              placeholder="Facebook"
              className="form-control"
             {...register("social.facebook",{
              required : {
                value : true,
                message : 'Facebook is required'
              }
             })}
            />
             <p className="errorText">{errors?.social?.facebook?.message}</p>

          </div>

          <div className="form-group mt-2">
            <label className="mb-2">Primary phone number</label>
            <input
              type="text"
              placeholder="Primary Number"
              className="form-control"
             {...register("phoneNumber.0",{
              required : {
                value : true,
                message : 'Primary PhoneNumber is required'
              }
             })}
            />
             <p className="errorText">{errors?.phoneNumber?.[0]?.message}</p>

          </div>

          <div className="form-group mt-2">
            <label className="mb-2">Secondary phone number</label>
            <input
              type="text"
              placeholder="Secondary Number"
              className="form-control"
             {...register("phoneNumber.1",{
              required : {
                value : true,
                message : 'Secondary PhoneNumber is required'
              }
             })}
            />
            <p className="errorText">{errors?.phoneNumber?.[1]?.message}</p>

          </div>

             <div>
              <label>List of phone numbers</label>
              <div>
                {
                   fields.map((field,index) => {
                    return( <div className="form-group" key={field?.id}>
                      <input className="form-control mt-2" type="text" {...register(`phNumbers.${index}.number`)} />
                      {
                        index > 0 && (
                          <button type="button" className="btn btn-danger mt-2" onClick={() => remove(index)}>Remove</button>
                          )}
                    </div>
                    );
                   })
                }
                <button type="button" className="btn btn-secondary mt-2" onClick={() => append({number : ''})}>Add Phone number</button>
              </div>
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
