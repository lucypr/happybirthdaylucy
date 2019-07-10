
import * as React from 'react';

import './App.css';

import Description from './Description';

import Header from './Header';

import photo from './photo.jpg';



class App extends React.Component {

  public render() {

    return (

      <div className="App">

        <header className="App-header">

          <img src={photo} className="lucy" alt="logo" />

          <Header name="LUCY" />

        </header>

        <Description countBy={1} />

      </div>

    );

  }

}



export default App;
