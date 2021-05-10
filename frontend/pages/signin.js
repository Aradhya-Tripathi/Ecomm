import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";

export default function Auth(props) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font h-full md:h-screen">
      <div className="container px-5 py-24 mx-auto max-w-5xl flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">
            Some smart sounding long lines of bs.
          </h1>
          <p className="leading-relaxed mt-4">
            More bs to support the bs above
          </p>
        </div>
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.username = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg ring ring-indigo-400 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Username
                </label>
                <Field
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="email"
                  name="username"
                />
                <ErrorMessage name="username" component="div" />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Password
                </label>
                <Field
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <button
                className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
                disabled={isSubmitting}
              >
                Sign in
              </button>
              <Link href="/signup">
                <p className="text-xs mt-3 text-white">
                  You have a account right? No?
                </p>
                {/* <p className="text-blue-500">No?</p> */}
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}