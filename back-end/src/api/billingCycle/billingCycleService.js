const BillingCycle = require("./billingCycle");

//métodos disponíveis para uso
BillingCycle.methods("get", "post", "put", "delete");
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route("get", (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [err] });
    }
  });
});

module.exports = BillingCycle;
