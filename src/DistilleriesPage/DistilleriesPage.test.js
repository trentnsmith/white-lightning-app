import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import DistilleriesPage from './DistilleriesPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <DistilleriesPage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});