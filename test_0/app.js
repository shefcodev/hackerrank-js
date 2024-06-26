'use strict';

function Activity(amount) {
  this.amount = amount;
}

Activity.prototype.setAmount = function (value) {
  if (value <= 0) {
    return false;
  } else {
    this.amount = value;
    return true;
  }
};

Activity.prototype.getAmount = function () {
  return this.amount;
};

function Payment(amount, receiver) {
  Activity.call(this, amount);
  this.receiver = receiver;
}

Payment.prototype = Object.create(Activity.prototype);

Payment.prototype.setReceiver = function (receiver) {
  this.reciever = receiver;
};

Payment.prototype.getReceiver = function () {
  return this.receiver;
};

function Refund(amount, sender) {
  Activity.call(this, amount);
  this.sender = sender;
}

Refund.prototype = Object.create(Activity.prototype);

Refund.prototype.setSender = function (sender) {
  this.sender = sender;
};

Refund.prototype.getSender = function () {
  return this.sender;
};

// const refund = new Refund(30, 'clark');

// refund.setSender('tony');
// console.log(refund.getSender(), refund.getAmount());

// another test

function Employee(title) {
  this.title = title;
}

Employee.prototype.setTitle = function (title) {
  this.title = title;
};

Employee.prototype.getTitle = function () {
  return this.title;
};

function Engineer(title, isManager) {
  Employee.call(this, title);
  this.isManager = isManager;
}

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.setIsManager = function (isManager) {
  this.isManager = isManager;
};

Engineer.prototype.getIsManager = function () {
  return this.isManager;
};

// const engineer = new Engineer('QA Engineer', false);

// engineer.setTitle('Site Engineer');
// engineer.getTitle();
// console.log(engineer);
