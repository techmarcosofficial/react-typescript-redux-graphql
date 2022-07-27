import React from "react";
import { Formik } from "formik";
import Header from "../../../components/layout/Header/Header";
import { RegisterFormProps } from "../../../types";

const Register = () => {
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-medium mb-5">Sign Up</h2>
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
              validate={values => {
                const errors: RegisterFormProps = {};
                if (!values.firstName && !values.firstName.trim().length) {
                  errors.firstName = 'Required';
                }
                if (!values.email && !values.email.trim().length) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.password && !values.password.trim().length) {
                  errors.password = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log('Form submitted!!!!!!!!!!!!!!!');
                // API request
                // ...
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className="space-y-4 text-gray-700" onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/2">
                      <label className="block mb-1" htmlFor="firstName">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        placeholder="i.e XYZ"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      {errors.firstName && touched.firstName && errors.firstName}
                    </div>
                    <div className="w-full px-2 md:w-1/2">
                      <label className="block mb-1" htmlFor="lastName">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        placeholder="i.e XYZ"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <label className="block mb-1" htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" id="formGridCode_card"
                        placeholder="i.e. xyz@gmail.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}  
                      />
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <label className="block mb-1" htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" id="formGridCode_card"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}  
                      />
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;