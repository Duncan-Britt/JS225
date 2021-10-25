let invoices = {
  unpaid: [],

  add(name, amount) {
    this.unpaid.push({ name, amount });
  },
};

invoices.totalDue = function() {
  return this.unpaid.reduce((acc, invoice) => {
    return acc + invoice.amount;
  }, 0);
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
// console.log(invoices);
// console.log(invoices.totalDue());

invoices.paid = [];
invoices.payInvoice = function(name) {
  let remainingUnpaid = [];

    this.unpaid.forEach(invoice => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        remainingUnpaid.push(invoice);
      }
    });

  this.unpaid = remainingUnpaid;
}


invoices.totalPaid = function() {
  return this.paid.reduce((acc, invoice) => {
    return acc + invoice.amount;
  }, 0);
}

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(
  invoices.totalPaid(),
  invoices.totalDue(),
);
