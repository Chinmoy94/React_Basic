import React from 'react';

const App = function() {
  return React.createElement(
    'div',
    { className: 'login-container' },
    React.createElement(
      'form',
      { 
        className: 'login-form',
        onSubmit: (e) => {
          e.preventDefault();
          // Handle form submission here
        }
      },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement('label', { htmlFor: 'username' }, 'Username'),
        React.createElement('input', {
          type: 'text',
          id: 'username',
          name: 'username',
          required: true
        })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement('label', { htmlFor: 'password' }, 'Password'),
        React.createElement('input', {
          type: 'password',
          id: 'password',
          name: 'password',
          required: true
        })
      ),
      React.createElement(
        'button',
        { 
          type: 'submit',
          className: 'submit-button'
        },
        'Submit'
      )
    )
  );
};

export default App;