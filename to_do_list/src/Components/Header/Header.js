import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
    return (
        <h1 className='header'>{props.text}</h1>
    )
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header;