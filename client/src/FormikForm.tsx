import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Too Short!")
        .max(255, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Must be an email address")
        .max(255, "Too Long!")
        .required("Required")
});

const foo = () => {};

export default function FormikForm() {

    return (
        <Formik
            onSubmit={foo}
            validationSchema={ValidationSchema}
            initialValues={{ name: "", email: "" }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="input-row">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="enter your name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={touched.name && errors.name ? "has-error" : ""}
                            />
                            <Error touched={touched.name} message={errors.name} />
                        </div>
                        <div className="input-row">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="enter your email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <Error touched={touched.email} message={errors.email} />
                        </div>
                        <div className="input-row">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}
        </Formik>
    )
}