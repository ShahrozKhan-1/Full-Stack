import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Contact.css";
import { Button } from "react-bootstrap";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(10, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="heading">Get in Touch</div>
        <Formik
          initialValues={{
            Name: "",
            message: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="contact-form">
              <Field name="Name" placeholder="Your Name" className="mail_text" type="text" size={50} />
              {errors.Name && touched.Name ? (
                <div>{errors.Name}</div>
              ) : null}

              <Field name="phone" type="tel" placeholder="Your Phone" className="mail_text" size={50} />
              {errors.phone && touched.phone ? (
                <div>{errors.phone}</div>
              ) : null}

              <Field name="email" type="email" placeholder="Your Email" className="mail_text" size={50} />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <Field name="message" type="textarea" placeholder="Message" className="mail_text msg" size={50} />
              {errors.message && touched.message ? (
                <div>{errors.message}</div>
              ) : null}

              <Button variant="outline-danger px-5 py-2 mt-4" type="submit">SEND</Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
