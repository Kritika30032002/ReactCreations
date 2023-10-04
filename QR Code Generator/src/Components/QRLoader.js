import React, { useState } from 'react';
import QRCode from 'qrcode.react';

export default function Qr() {
  const [link, setLink] = useState(''); // State to store user input
  const [qrCodeData, setQRCodeData] = useState(''); // State to store QR code data

  const generateQRCode = () => {
    setQRCodeData(link);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter any link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <br/>
      <button onClick={generateQRCode}>Generate new QR</button>
      <br/><br/>
      {qrCodeData && <QRCode value={qrCodeData} style = {{width: "20rem", height: "20rem"}} />}
    </div>
  );
}
