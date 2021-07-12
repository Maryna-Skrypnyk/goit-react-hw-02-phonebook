import React, { Component } from 'react';

const Title = ({ title }) => <h3>{title}</h3>;

const FilterName = ({ formName }) => (
  <input
    type="text"
    name={formName}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    required
  />
);

class Filter extends Component {
  state = {
    name: '',
  };

  render() {
    const { name } = this.state;

    return (
      <>
        <Title title="Find contacts by name" />
        <FilterName formName={name} />
      </>
    );
  }
}

export default Filter;
