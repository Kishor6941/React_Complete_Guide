import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import "./styles/YoutubeForm.css";
import { DevTool } from "@hookform/devtools";

const YoutubeForm = () => {
  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      channelName: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumber: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
  });
  const {
    register,
    formState: { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful },
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset
  } = form;
  // console.log({isSubmitting});
  console.log({isSubmitted});
  console.log({isSubmitSuccessful});
  // console.log({touchedFields, dirtyFields, isDirty});
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  const resetForm = () => {
    form.reset();
  };

  const getFormvalues = () => {
    console.log("get control values", getValues("social"));
    console.log("get control values", getValues(["userName", "email"]));
  };

  const setFormvalues = () => {
    setValue("userName", "Sunil", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    })
    return () => {
      subscription.unsubscribe()
    }
  },[watch])

  useEffect(() => {
    if(isSubmitSuccessful) {
      form.reset()
    }
  },[isSubmitSuccessful, reset])
  // const watchUserName = watch(["userName","email"])

  const onError = (errors) => {
    console.log("Form Erros", errors);
  }
  const watchForm = watch();
  return (
    <>
      <div className="col-md-6 youtubeForm">
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <h1>YoutubeForm</h1>
          <h1>(React Hook Form)</h1>
          {/* <h1>Watched values : {watchUserName}</h1> */}
          {/* <h1>Watched values : {JSON.stringify(watchForm)}</h1> */}
          <div className="form-group mt-2">
            <label className="mb-2">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter UserName"
              {...register("userName", {
                required: {
                  value: true,
                  message: "UserName is required",
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
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: "Invalid email address",
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue !== "admin@example.com" ||
                      "Enter a different  email address"
                    );
                  },
                  notBlackListed: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("baddomain.com") ||
                      "This domain is not supported"
                    );
                  },
                },
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
              {...register("channelName", {
                required: {
                  value: true,
                  message: "Channel Name is required",
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
              {...register("social.twitter", {
                required: {
                  value: true,
                  message: "Twitter is required",
                },
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
              {...register("social.facebook", {
                required: {
                  value: true,
                  message: "Facebook is required",
                },
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
              {...register("phoneNumber.0", {
                required: {
                  value: true,
                  message: "Primary PhoneNumber is required",
                },
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
              {...register("phoneNumber.1", {
                required: {
                  value: true,
                  message: "Secondary PhoneNumber is required",
                },
              })}
            />
            <p className="errorText">{errors?.phoneNumber?.[1]?.message}</p>
          </div>

          <div>
            <label>List of phone numbers</label>
            <div>
              {fields.map((field, index) => {
                return (
                  <div className="form-group" key={field?.id}>
                    <input
                      className="form-control mt-2"
                      type="text"
                      {...register(`phNumbers.${index}.number`)}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
              <button
                type="button"
                className="btn btn-secondary mt-2"
                onClick={() => append({ number: "" })}
              >
                Add Phone number
              </button>
            </div>
          </div>

          <div className="form-group mt-2">
            <label className="mb-2">Age</label>
            <input
              type="number"
              className="form-control"
              {...register("age", {
                valueAsNumber: true,
              })}
            />
          </div>

          <div className="form-group mt-2">
            <label className="mb-2">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              {...register("dob", {
                valueAsDate: true,
              })}
            />
          </div>

          <div className="footer-btn">
            <div className="mt-2">
              <button type="submit" className="btn btn-primary" disabled = {!isDirty || !isValid}>
                Login
              </button>
            </div>
            <div className="mt-2">
              <button className="btn btn-info" onClick={resetForm}>
                Reset
              </button>
            </div>
            <div className="mt-2">
              <button className="btn btn-success" onClick={getFormvalues}>
                getValues
              </button>
            </div>

            <div className="mt-2">
              <button className="btn btn-dark" onClick={setFormvalues}>
                setValues
              </button>
            </div>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default YoutubeForm;
