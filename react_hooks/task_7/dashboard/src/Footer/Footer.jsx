import React from 'react';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  const shouldShowContact = user && user.isLoggedIn === true;

  return (
    <footer className='App-footer'>
      <p>Copyright {getCurrentYear()} {getFooterCopy()}</p>
      {shouldShowContact && (
        <p>
          <a href="#" aria-label="Contact us link">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
