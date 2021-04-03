'use strcit';

const faker = require('faker');
const events = require('../modular/events.js');

events.on('start', starterFunction)
events.on('delievered', successfulDelivery)

function starterFunction() {
  setInterval(() => {
    let mockOrder = {
      storeName: faker.company.companyName(),
      orderId: faker.address.zipCode(),
      customerName: faker.name.findName(),
      address: faker.address.streetAddress()
    }

    console.log(`Item Ready for Pickup \n
    ${mockOrder.storeName}\n 
    ${mockOrder.orderId}\n
    ${mockOrder.customerName}\n
    ${mockOrder.address}\n`)
    events.emit('pickup', mockOrder)
  }, 5000)
}

function successfulDelivery(payload) {
  console.log(`Package Delievered ${payload.orderId} ON ${new Date()}`)
}

module.exports = {
  starterFunction: starterFunction,
  successfulDelivery: successfulDelivery,
}