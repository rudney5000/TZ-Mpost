const React = require('react');
const { Button } = require('./button');

const GoogleSignInButton = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      {children}
    </Button>
  );
};

module.exports = GoogleSignInButton;