import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51IeCovL3R7xeA1n1EU6l3Uif6mxAHx8uJ4bcogkrehOXcRJ7aiWF7Z88x8HcYVQN0xQtsymYIgez45tq3fC11WtF0073sFmiol');

const ProcessPayment = () => {
    return (
        <div>
          <Elements stripe={stripePromise}>
          <CardElement
             options={{
               style: {
                base: {
                 fontSize: '16px',
                  color: '#424770',
                 '::placeholder': {
                  color: '#aab7c4',
            },
       },
        invalid: {
        color: '#9e2146',
       },
     },
     }}
   />
          </Elements>
        </div>
    );
};

export default ProcessPayment;