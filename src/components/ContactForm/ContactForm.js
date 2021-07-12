import React, { Component } from 'react';

const Title = ({ title }) => <h3>{title}</h3>;

const ContactFormButton = ({ addContact }) => (
  <button type="button" onClick={addContact}>
    Add contact
  </button>
);

const ContactFormName = ({ formName }) => (
  <input
    type="text"
    name={formName}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    required
  />
);

const ContactFormNumber = ({ formNumber }) => (
  <input
    type="tel"
    name={formNumber}
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
    required
  />
);

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = e => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <Title title="Name" />
        <ContactFormName formName={name} />

        <Title title="Number" />
        <ContactFormNumber formNumber={number} />
        <ContactFormButton addContact={this.addContact} />
      </>
    );
  }
}

export default ContactForm;
