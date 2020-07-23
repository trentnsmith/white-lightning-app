import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ViewAllSpirits from './ViewAllSpirits';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ViewAllSpirits />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});