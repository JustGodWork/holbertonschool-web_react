import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer">
      <p>{getFooterCopy(true)} - {getCurrentYear()}</p>
    </div>
  );
}

export default Footer;
