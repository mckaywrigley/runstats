const stripe = require("stripe")(process.env.stripeSecret);

stripe.subscriptions.create({
  customer: "",
  items: [
    {
      plan: "prod_FCDOPe4cmmm2sa"
    }
  ]
});
