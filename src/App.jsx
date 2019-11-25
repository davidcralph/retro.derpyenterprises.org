import React from 'react';
import About from './modules/About';
import CodingKnowledge from './modules/CodingKnowledge';
import Title from './modules/Title';
import ReactTooltip from 'react-tooltip';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div align='center'>
          <Title/>
          <About/>
          <CodingKnowledge/>
        </div>
        <ReactTooltip effect='solid'/>
      </React.Fragment>
    )
  }
}
 