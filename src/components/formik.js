import React from "react";
import { Formik } from "formik";

function FormikForm(props) {
  function handleSubmit(values, { setSubmitting }) {
    console.log(values);
  }

  function handleValidation(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={handleValidation}
      initialValues={props.initialValues}
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
        <form onSubmit={handleSubmit}>
          {props.sections.map((section, i) => (
            <section key={i}>
              <h3>Section {i + 1}</h3>

              <div>
                {section.inputs.map(inputType => {
                  const id = `${inputType}_${i}`;
                  return (
                    <label htmlFor={id} key={id}>
                      {inputType}
                      <input
                        type={inputType}
                        name={id}
                        id={id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[id]}
                      />
                    </label>
                  );
                })}
              </div>
            </section>
          ))}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default FormikForm;
