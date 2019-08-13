const Passenger = require('./../database/Passenger');
const Mailer = require('./../../../../../../secuirity/Mailer');


//passenger registration
exports.passengerRegistration = (req, res, next) => {
  console.log("running");
  console.log(req.body);
  Passenger.savePassenger((req.body)).then((isAlreadyUser) => {
    console.log(isAlreadyUser);

  }).catch((error)=>{
    console.log(error);
  });
};
