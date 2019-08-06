import React from "react";
import { Form, Text } from "informed";

function InformedForm(props) {
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
    <Form
      onSubmit={handleSubmit}
      validate={handleValidation}
      initialValues={props.initialValues}
    >
      {() => (
        <React.Fragment>
          {props.sections.map((section, i) => (
            <section key={i}>
              <h3>Section {i + 1}</h3>

              <div>
                {section.inputs.map(inputType => {
                  const id = `${inputType}_${i}`;
                  return (
                    <label htmlFor={id} key={id}>
                      {inputType}
                      <Text type={inputType} name={id} id={id} />
                    </label>
                  );
                })}
              </div>
            </section>
          ))}

          <button type="submit">Submit</button>
        </React.Fragment>
      )}
    </Form>
  );
}

export default InformedForm;
