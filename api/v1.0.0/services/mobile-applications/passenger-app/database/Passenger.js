const Passenger = require('./../entity/Passenger_Entity');
const mongoose = require('mongoose');

exports.savePasseneger = (passenger_object) => {
  return new Promise((resolve, reject) => {
    Passenger.create(passenger_object).then((result) => {
      resolve(result);
    }).catch((error) => {
      reject(error);
    });
  });
};
