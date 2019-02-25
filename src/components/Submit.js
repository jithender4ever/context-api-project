import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Submit = () => {
    return (
        <ColorContext.Consumer>
            {(color) => (
                <LanguageContext.Consumer>
                  {lan => <button className={`ui button ${color}`}>{lan === 'english' ? 'Submit' : 'Voorleggen'} </button>}
                </LanguageContext.Consumer>
            )}
        </ColorContext.Consumer>
    );
};

export default Submit;
