'use strict';

const events = require('../modular/events.js');

events.on('pickup', itemPickedUp)
events.on('transit', inTransit)

function itemPickedUp(payload) {
  setTimeout(() => {
    console.log(`Item Picked Up: Order ID ${payload.orderId}`)
    events.emit('transit', payload)
  }, 1000)
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`***Transit: Order Number: ${payload.orderId}\n`)
    events.emit('delievered', payload)
  }, 3000)
}

module.exports = {
  itemPickedUp: itemPickedUp,
  inTransit: inTransit
}