// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   }
// }

function createInvoice(services = {}) {
  let invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
  };

  let payTotal = 0;

  invoice.total = function() {
    return this.phone + this.internet;
  };

  invoice.addPayment = function(payment) {
    payTotal += payment.internet;
    payTotal += payment.phone;
    payTotal += payment.amount || 0;
  }

  invoice.addPayments = function(payments) {
    payments.forEach(payment => {
      this.addPayment(payment);
    });
  }

  invoice.amountDue = function() {
    return this.total() - payTotal;
  }

  return invoice;
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

// --------------

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
