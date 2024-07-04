import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    address: '',
    gender: '',
    hobbies: [],
    country: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name is too short')
      .max(50, 'Name is too long'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short'),
    address: Yup.string()
      .required('Address is required')
      .min(10, 'Address is too short'),
    gender: Yup.string().required('Gender is required'),
    hobbies: Yup.array().min(1, 'At least one hobby is required'),
    country: Yup.string().required('Country is required')
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field type="text" id="address" name="address" className="form-control" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <div>
                  <Field type="radio" id="male" name="gender" value="male" className="form-check" />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <Field type="radio" id="female" name="gender" value="female" className="form-check" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Hobbies</label>
              <div className="checkbox-group">
                <div>
                  <Field type="checkbox" id="hobby1" name="hobbies" value="Reading" className="form-check" />
                  <label htmlFor="hobby1">Reading</label>
                </div>
                <div>
                  <Field type="checkbox" id="hobby2" name="hobbies" value="Traveling" className="form-check" />
                  <label htmlFor="hobby2">Traveling</label>
                </div>
                <div>
                  <Field type="checkbox" id="hobby3" name="hobbies" value="Gaming" className="form-check" />
                  <label htmlFor="hobby3">Gaming</label>
                </div>
              </div>
              <ErrorMessage name="hobbies" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <Field as="select" id="country" name="country" className="form-control">
                <option value="US">United States</option>
                <option value="pakistan">Pakistan</option>
                <option value="qatar">Qatar</option>
                <option value="canada">Canada</option>
                <option value="united kingdom">United Kingdom</option>
              </Field>
              <ErrorMessage name="country" component="div" className="error" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <h3>Form Values</h3>
            <pre className="json-output">{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
