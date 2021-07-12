import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  //   addContact = e => {
  //     this.setState({ name: '', number: '' });
  //   };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    console.log(`
      Name: ${name}
      Number: ${number}
    `);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
