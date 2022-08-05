import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Header from "../../components/layout/Header/Header";
import { useMutation } from '@apollo/client';
import { ADD_POST } from "../../graphql/mutation";

const AddPost = (props: any) => {
  const [addPost] = useMutation(ADD_POST, {
    onCompleted: (res): void => {
      if (res.createPost) {
        window.location.href = '/posts';
      }
    },
    onError: (err): void => {
      console.log('create account error', err.message);
    },
  });
  return (
    <>
      <Header />
      <div className="bg-indigo-100 py-6 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <Link to="/posts">Back</Link>
            <h2 className="text-center text-3xl md:text-4xl font-medium mb-5">Add New Post</h2>
            <Formik
              initialValues={{ title: '', body: '' }}
              validate={values => {
                const errors: { title?: string, body?: string } = {};
                if (!values.title) {
                  errors.title = 'Required';
                }
                if (!values.body && !values.body.trim().length) {
                  errors.body = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log('Form submitted!!!!!!!!!!!!!!!');
                // API request
                // ...
                console.log(values);
                console.log({ title: values.title, body: values.body, user: "123" });
                addPost({ variables: { title: values.title, body: values.body, user: "123" } });
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
                      <label className="block mb-1" htmlFor="title">Title</label>
                        <input
                          type="text"
                          name="title"
                          className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        //   placeholder="Title"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                        />
                        {errors.title && touched.title && errors.title}
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <label className="block mb-1" htmlFor="body">Content</label>
                      <textarea
                        name="body"
                        className="w-full px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        // placeholder="Content"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.body}
                        cols={10}
                      />
                    </div>
                  </div>
                  {errors.body && touched.body && errors.body}
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

export default AddPost;