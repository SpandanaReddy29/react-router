import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {

  const navigate = useNavigate();

  return (
    <div>
      Order Confirmed
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )
}

export default OrderSummary