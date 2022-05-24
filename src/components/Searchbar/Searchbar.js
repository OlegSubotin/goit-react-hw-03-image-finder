import React, { Component } from "react";
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import s from './Searchbar.module.css';

class Searchbar extends Component{
    state = {
        image: '',
    }

    handleImageChange = e => {
        this.setState({
            image: e.currentTarget.value.toLowerCase()
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { image } = this.state;
        if (image.trim() === '') {
            Notiflix.Notify.info('Put a topic you are looking for');
            return;
        };
        
        this.props.onSubmit(image);
        this.setState({ image: '' });
    };

    render() {
        const { image } = this.state;
        const { handleImageChange, handleSubmit } = this;
        return (
            <header className={s.searchbar}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <button type="submit" className={s.button}>
                        <span className={s.buttonLabel}><BsSearch  fill="#3f51b5" /></span>
                    </button>

                    <input
                        className={s.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={image}
                        onChange={handleImageChange}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

export default Searchbar;