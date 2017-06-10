/// <reference path="../../typings/index.d.ts" />

import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';


class App extends Component {
  render() {
    return (
      <div className='container'>

        <Sidebar />





        <div className='contacts-list'>

          <div className='contacts__search'>
            <input type='text' placeholder="Search All on My Mac" />
          </div>

          <div className='contacts__search__results'>

            <ul>
              <li className="group__title">A</li>
              <li><a href=''>Shirley <strong>de los Santos</strong></a></li>
              <li><a href=''><strong>Debora</strong></a></li>
              <li><a href=''>Evelin <strong>Ipes</strong></a></li>
              <li><a href=''>HL: Ignacio <strong>Lanchez</strong></a></li>
              <li><a href=''>Estela <strong>Mamá 2</strong></a></li>
              <li className="active"><a href=''>Jose <strong>Paolillo</strong></a></li>
              <li><a href=''>Katerin <strong>Recalde</strong></a></li>
            </ul>

            <ul>
              <li className="group__title">B</li>
              <li><a href=''>Shirley <strong>de los Santos</strong></a></li>
              <li><a href=''><strong>Debora</strong></a></li>
              <li><a href=''>Evelin <strong>Ipes</strong></a></li>
              <li><a href=''>HL: Ignacio <strong>Lanchez</strong></a></li>
              <li><a href=''>Estela <strong>Mamá 2</strong></a></li>
              <li><a href=''>Jose <strong>Paolillo</strong></a></li>
              <li><a href=''>Katerin <strong>Recalde</strong></a></li>
            </ul>

            <ul>
              <li className="group__title">C</li>
              <li><a href=''>Shirley <strong>de los Santos</strong></a></li>
              <li><a href=''><strong>Debora</strong></a></li>
              <li><a href=''>Evelin <strong>Ipes</strong></a></li>
              <li><a href=''>HL: Ignacio <strong>Lanchez</strong></a></li>
              <li><a href=''>Estela <strong>Mamá 2</strong></a></li>
              <li><a href=''>Jose <strong>Paolillo</strong></a></li>
              <li><a href=''>Katerin <strong>Recalde</strong></a></li>
            </ul>

          </div>

        </div>



        <div className='contact-container'>contact-container</div>


      </div>
    );
  }
}

export default App;
