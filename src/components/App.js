import React, { Component } from 'react';
import CreateUser from "./CreateUser";
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from "../contexts/ColorContext";

class App extends Component {
  state = { language: 'english' };

  handleLanguageChange = (language) => {
      this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        Select language:
        <i className={'flag us'} onClick={() => this.handleLanguageChange('english')} />
        <i className={'flag nl'} onClick={() => this.handleLanguageChange('dutch')} />

        <ColorContext.Provider value={'red'}>
            <LanguageContext.Provider value={this.state.language}>
                <CreateUser />
            </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
