import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Distillery from './Distillery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Distillery />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});