import React, { Component } from 'react';

class Filter extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;

    return (
      <label>
        Find contacts by name
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
    );
  }
}

export default Filter;
