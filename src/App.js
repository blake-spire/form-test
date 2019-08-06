import React from "react";
import Formik from "./components/formik";
import Informed from "./components/informed";
import Vanilla from "./components/vanilla";
import "./App.css";

function App() {
  const [form, setForm] = React.useState("");

  const inputs = [
    "text",
    "number",
    "date",
    "email",
    "password",
    "search",
    "tel",
    "url",
  ];

  const sections = Array.from({ length: 50 }, (_, i) => ({ inputs }));
  var initialValues = {};
  sections.map((section, i) =>
    section.inputs
      .map(input => `${input}_${i}`)
      .flat()
      .forEach(val => (initialValues[val] = ""))
  );

  return (
    <section>
      <h1>form test</h1>
      {["formik", "informed", "vanilla"].map(value => (
        <label key={value}>
          <input
            type="radio"
            name="form"
            value={value}
            checked={form === value}
            onChange={() => setForm(value)}
          />
          {`Select ${value}`}
        </label>
      ))}

      {form === "formik" && (
        <Formik sections={sections} initialValues={initialValues} />
      )}

      {form === "informed" && (
        <Informed sections={sections} initialValues={initialValues} />
      )}

      {form === "vanilla" && (
        <Vanilla sections={sections} initialValues={initialValues} />
      )}
    </section>
  );
}

export default App;
