import React, { Component } from 'react';

import shortid from 'shortid';

import styles from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  nameInputId = shortid.generate();

  numberInputId = shortid.generate();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  //   handleInputChange = e => {
  //     const { name, value } = e.target;
  //     this.setState({ [name]: value });
  //   };

  handleSubmit = e => {
    e.preventDefault();

    // const { name, number } = this.state;

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.Form}>
        <label htmlFor={this.nameInputId} className={styles.Label}>
          <span className={styles.LabelText}>Name</span>
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={styles.Input}
          />
        </label>

        <label htmlFor={this.numberInputId} className={styles.Label}>
          <span className={styles.LabelText}>Number</span>
          <input
            id={this.numberInputId}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            className={styles.Input}
          />
        </label>

        <button type="submit" className={styles.Button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
