import React, { useState } from 'react';
import '../assets/css/payment.css'; 
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Payment() {
  const [fields, setFields] = useState({
    cardnumber: '',
    cardholder: '',
    exp: '',
    cvc: '',
  });
  const [valid, setValid] = useState(false);

  const formatCardNumber = (number) => {
    return number.replace(/[^0-9]/gi, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExp = (number) => {
    return number.replace(/[^0-9]/gi, '').slice(0, 4).replace(/(.{2})/, '$1\/').trim();
  };

  const validate = () => {
    let isValid = true;
    for (const value in fields) {
      if (fields[value].length < 1) {
        isValid = false;
        break;
      }
    }
    setValid(isValid);
  };

  const handleInputChange = (event, fieldName) => {
    let inputValue = event.target.value;
    switch (fieldName) {
      case 'cardnumber':
        inputValue = formatCardNumber(inputValue);
        break;
      case 'exp':
        inputValue = formatExp(inputValue);
        break;
      default:
        break;
    }
    setFields({ ...fields, [fieldName]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bodypay">
    <div className="cc">
      <div className="cc__card">
        {/* Credit card display */}
        <div className="cc__logo">
          <svg viewBox="0 0 35.31 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e60019" strokeWidth="0" d="m12 24-12-12 12-12 5.66 5.66-6.34 6.34 6.34 6.34-5.66 5.66z" />
            <path fill="#f69f24" strokeWidth="0" d="m23.31 0 12 12-12 12-5.66-5.66 6.34-6.34-6.34-6.34 5.66-5.66z" />
            <rect fill="#f85c1d" strokeWidth="0" transform="translate(-3.31 16) rotate(-45)" x="13.17" y="7.52" width="8.97" height="8.97" />
          </svg>
        </div>
        <div className="cc__cardgroup cc__cardgroup--wide">
          <div className="cc__card-label">Card Number</div>
          <div className="cc__card-value cc__card-value--large">{fields.cardnumber}</div>
        </div>
        <div className="cc__cardgroup">
          <div className="cc__card-label">Cardholder</div>
          <div className="cc__card-value">{fields.cardholder}</div>
        </div>
        <div className="cc__cardgroup">
          <div className="cc__card-label">Expires</div>
          <div className="cc__card-value">{fields.exp}</div>
        </div>
        <div className="cc__cardgroup">
          <div className="cc__card-label">CVC</div>
          <div className="cc__card-value">{fields.cvc}</div>
        </div>
      </div>
  
      <form className="cc__form" onSubmit={handleSubmit} onKeyUp={validate}>
        <fieldset>
          <legend>Payment Details</legend>
          <div className="fieldgroup">
            <label htmlFor="card-number">Amount</label>
            <input
              id="amount"
              type="text"
              tabIndex="1"
              
            />
          </div>
          <div className="fieldgroup">
            <label htmlFor="card-number">Card Number</label>
            <input
              id="card-number"
              type="text"
              tabIndex="1"
              value={fields.cardnumber}
              onChange={(e) => handleInputChange(e, 'cardnumber')}
            />
          </div>
          <div className="fieldgroup">
            <label htmlFor="cardholder">Cardholder</label>
            <input
              id="cardholder"
              type="text"
              tabIndex="2"
              value={fields.cardholder}
              onChange={(e) => handleInputChange(e, 'cardholder')}
            />
          </div>
          <div className="fieldgroup fieldgroup--half">
            <label htmlFor="card-exp">Expires</label>
            <input
              id="card-exp"
              type="text"
              placeholder="MM/YY"
              tabIndex="3"
              value={fields.exp}
              onChange={(e) => handleInputChange(e, 'exp')}
            />
          </div>
          <div className="fieldgroup fieldgroup--half">
            <label htmlFor="card-cvc">CVC</label>
            <input
              id="card-cvc"
              type="text"
              tabIndex="4"
              value={fields.cvc}
              onChange={(e) => handleInputChange(e, 'cvc')}
            />
          </div>
          <Link to="/success" className="paybutton" disabled={!valid}>Proceed To Pay </Link>
        </fieldset>
      </form>
    </div>
    </div>
  );
}

export default Payment;
