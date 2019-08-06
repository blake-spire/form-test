import React from "react";

class VanillaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialValues;
  }

  handleSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.sections.map((section, i) => (
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
                      onChange={e => this.setState({ [id]: e.target.value })}
                      value={this.state[id]}
                    />
                  </label>
                );
              })}
            </div>
          </section>
        ))}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default VanillaForm;
