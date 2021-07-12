import React from 'react';

import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return <ul>{contacts.map(ContactItem)}</ul>;
};

const ContactItem = ({ id, name }) => {
  return <li key={id}>{name}</li>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
