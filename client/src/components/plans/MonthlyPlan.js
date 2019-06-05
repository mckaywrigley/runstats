import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const URL = "http://localhost:4000/api/stripe";

class MonthlyPlan extends Component {
  handleToken = token => {
    axios.post(`${URL}/monthly`, token);
  };

  render() {
    return (
      <div>
        <h2>Monthly Plan</h2>
        <StripeCheckout
          amount={500}
          token={token => this.handleToken(token)}
          stripeKey="pk_test_qPNK6zUKkyinAbXNevRbSiud00j8QTrbdi"
          name="Runstats Premium"
          description="$5 for 30 days of Runstats Premium."
        >
          <button>Subscribe</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default MonthlyPlan;
