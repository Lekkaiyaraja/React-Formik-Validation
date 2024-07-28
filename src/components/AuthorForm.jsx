import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Birth Date</label>
          <Field name="birthDate" type="date" />
          <ErrorMessage name="birthDate" component="div" />
        </div>
        <div>
          <label>Biography</label>
          <Field name="biography" as="textarea" />
          <ErrorMessage name="biography" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;