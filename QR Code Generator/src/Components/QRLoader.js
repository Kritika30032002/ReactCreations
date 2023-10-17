import React, { useState } from 'react';
import QRCode from 'qrcode.react';

export default function Qr() {
  const [link, setLink] = useState(''); // State to store user input
  const [qrCodeData, setQRCodeData] = useState(''); // State to store QR code data
  const [isValidLink, setIsValidLink] = useState(true); // check if link input is valid or not

  const generateQRCode = () => {
    const checkLink = (/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/.test(link))
    if(checkLink){
      setIsValidLink(true)
      setQRCodeData(link);
    }
    else{
      setIsValidLink(false)
    }

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
      {qrCodeData && isValidLink && <QRCode value={qrCodeData} style = {{width: "20rem", height: "20rem"}} />}
      {!isValidLink && <h1>Please enter a valid link !!!</h1>}
    </div>
  );
}
