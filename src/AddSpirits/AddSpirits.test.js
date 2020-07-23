import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import AddSpirits from './AddSpirits';

it('renders without crashing', () => {
  let match = {
    params: {
      spirit_id: 2
    }
  }

  const history = createMemoryHistory()
  const route = '/spirits/2'
  history.push(route)
  const div = document.createElement('div');
  ReactDOM.render(
        <Router history={history}>
            <AddSpirits match={match} />
        </Router>, 
        div
  );
  ReactDOM.unmountComponentAtNode(div);
});