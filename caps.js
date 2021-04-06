'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const caps = require('socket.io')(PORT);

// PICKUP
caps.on('connection', (socket) => {
  console.log(`${socket.id} Connection Established Successfully`)
  socket.on('pickup', (payload) => {
    console.log(`New Item Ready for Pickup \n
    ${payload.storeName}\n 
    ${payload.orderId}\n
    ${payload.customerName}\n
    ${payload.address}\n`);
    socket.broadcast.emit('newPickup', payload);
  })

  // TRANSIT
  socket.on('in-transit', (payload) => {
    setTimeout(() => {
      console.log(`Item Pickup: ORDER NUMBER: ${payload.orderId}`)
      console.log(`Item Now In Transit: ORDER NUMBER: ${payload.orderId}\n`)
      socket.emit('messageSent', payload)
    }, 3000)
  })

  //DELIVERED
  socket.on('delievered', (payload) => {
    console.log(`Item Delievered: ORDER NUMBER: ${payload.orderId}\n`)
    socket.broadcast.emit('delievered', payload)
  })
})