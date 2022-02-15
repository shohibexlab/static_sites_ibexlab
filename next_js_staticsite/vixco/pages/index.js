
import React from 'react';
import Popup from './modal';

export default function STATIC() {
  const DOMAIN_NAME = process.env.DOMAIN_NAME;

  return (
    <div style={{ height: "100vh" }}>
      <Popup />
      <iframe src={DOMAIN_NAME}
        // <iframe src="../../vixco_net/index.html"
        frameBorder="0"
        width="100%"
        height="100%"
        scrolling="none"
      ></iframe>
    </div>
  )
}



