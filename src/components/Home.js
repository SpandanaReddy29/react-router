import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h2>
        Home Page
        <button onClick={() => navigate('orderSummary')}>Place Order</button>
      </h2>
    </div>
  )
}

export default Home