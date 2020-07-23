import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Spirit from './Spirit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    id: '123',
    spirit_name: 'test name',
    category: 'test category',
    abv: 'test abv',
    age: 'test age',
    content: 'test content',
    distillId: 'testing'
  }
  ReactDOM.render(
    <BrowserRouter>
      <Spirit {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});