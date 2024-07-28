import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Book form validation schema
const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN number is required'),
    publicationDate: Yup.date().required('Publication date is required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ resetForm }) => (
        <Form>
          <div>
            <label>Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label>Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label>ISBN</label>
            <Field name="isbn" type="text" />
            <ErrorMessage name="isbn" component="div" />
          </div>
          <div>
            <label>Publication Date</label>
            <Field name="publicationDate" type="date" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
