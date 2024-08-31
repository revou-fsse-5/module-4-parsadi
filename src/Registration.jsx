import React from "react";
import { useFormik, Formik, Form, Field } from 'formik';
import { signUpValidation } from "./SignUpValidation";
import { SliderMarkLabel } from "@mui/material";

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: ''
}




function Registration() {
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpValidation,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="name" value={values.name}
                    onBlur={handleBlur} onChange={handleChange} />
                <br />
                {errors.name && <small>{errors.name}</small>}
                <br />

                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" value={values.email}
                    onBlur={handleBlur} onChange={handleChange} />
                <br />
                {errors.email && <small>{errors.email}</small>}
                <br />

                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" value={values.password}
                    onBlur={handleBlur} onChange={handleChange} />
                <br />
                {errors.password && <small>{errors.password}</small>}
                <br />

                <label htmlFor="cpassword">Confirm Password</label>
                <br />
                <input type="password" name="cpassword" value={values.cpassword}
                    onBlur={handleBlur} onChange={handleChange} />
                <br />
                {errors.cpassword && <small>{errors.cpassword}</small>}
                <br />

                <button type="submit">submit</button>
            </form>

        </div>
    )
}

export default Registration