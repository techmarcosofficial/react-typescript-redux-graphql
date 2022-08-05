import React from "react";
import { Formik } from "formik";
import { 
  useSelector, 
  useDispatch
} from 'react-redux';
import Header from "../../../components/layout/Header/Header";
import { LoginFormProps } from "../../../types";
import { useMutation } from '@apollo/client';
import { SIGN_IN } from "../../../graphql/mutation";
import { loginAction } from "../../../redux/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const [login] = useMutation(SIGN_IN, {
    onCompleted: (res): void => {
      if (res.login.token) {
        dispatch(loginAction(res.login));
        const token = res.login.token;
        delete res.login.token;
        localStorage.setItem('user', JSON.stringify(res.login));
        localStorage.setItem('accessToken', token);
        window.location.href = '/';
      } else {
        alert("Invalid username or password");
      }
    },
    onError: (err): void => {
      console.log('login user error', err.message);
    },
  });
  if (user) {
    window.location.href = "/";
    // return;
  }
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-medium mb-5">Login</h2>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors: LoginFormProps = {};
                if (!values.email) {
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
                login({ variables: { email: values.email, password: values.password } });
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
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <label className="block mb-1" htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                          placeholder="Email"
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
                        className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>
                  </div>
                  {errors.password && touched.password && errors.password}
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

export default Login;