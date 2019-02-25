import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

function renderLabel(lan) {
    return (
        <label>{lan === 'english' ? 'Name' : 'Naam'}</label>
    );
};

const Input = () => {
    return (
        <div className={'ui field'}>
            <LanguageContext.Consumer>
                {language => renderLabel(language)}
            </LanguageContext.Consumer>
            <input />
        </div>
    );
};

export default Input;
