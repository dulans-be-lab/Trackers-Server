const Passenger = require('./../database/Passenger');
const Mailer = require('./../../../../../../secuirity/Mailer');


//passenger registration
exports.passengerRegistration = (req, res, next) => {
  Passenger.savePassenger((req.body)).then((registeredUser) => {
    Mailer.sendMail({
      to: registeredUser.passenger_mail,
      verification: registeredUser.verification_code
    }).then(result => {
      res.status(200).json({
        message: 'user created',
        id: registeredUser._id
      });
    }).catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'mail sending failed'
      });
    });
  }).catch((error) => {
    console.log(error);
    res.status(500).json({
      message: 'sudu mahaththaya user registrationeke aulak..'
    });
  });
};
