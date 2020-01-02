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
      message: 'sudu mahaththaya user registration eke aulak..'
    });
  });
};

// passenger login
exports.passengerLogin = (req, res, next) => {
  Passenger.searchPassenger({
    passenger_mail: req.body.passenger_mail
  }).then((loggedPassenger) => {
    console.log("loggedPassenger.password : " + loggedPassenger.password);
    if (loggedPassenger != null) {
      var encryptedPass;
      loggedPassenger.checkPassword(req.body.password).then((isPasswordMatch) => {
        console.log(isPasswordMatch);
        if (isPasswordMatch) {
          res.status(200).json({
            message: 'Sudu mahaththaya Passenger ta log wenna denna...'
          });
        } else {
          res.status(401).json({
            message: 'Sudu mahaththaya password match wenne nee...'
          });
        }
      }).catch((error) => {
        console.log(error);
        res.status(401).json({
          message: 'Sudu mahaththaya server eke aulak. password check karanna une nee...'
        });
      });

    } else {
      console.log("user not found");
      res.status(401).json({
        message: 'sudu mahaththaya Authantication failed. User kenek eththe nee'
      });
    }
  }).catch((error) => {
    console.log(error);
    res.status(500).json({
      message: 'sudu mahaththaya user login eke aulak..'
    });
  });
};

//passenger update
exports.passengerUpdate = (req, res, next) => {
  
}
