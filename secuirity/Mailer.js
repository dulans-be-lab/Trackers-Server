const nodemailer = require('nodemailer');

module.exports.sendMail = (mail) => {

  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.verificationMail,
        pass: process.env.verificationMailPassword
      }
    });

    let mailOptions = {
      from: '"Trackers - Admin" <' + process.env.verificationMail + '>',
      to: mail.to,
      subject: 'User Verification',
      text: 'verification',
      html: '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Trackers</title> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> <style> .yewoi-avatar { vertical-align: middle; width: 50px; height: 50px; border-radius: 50%; margin-left: 47%; margin-top: 5%; } .top-panel { margin: 10%;margin-bottom:0%; background-color: whitesmoke; border-top-left-radius: 3px; border-top-right-radius: 3px; } .bottom-panel { border: 1px solid; margin: 10%; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; border-color: whitesmoke; } .title { margin-left: 40%; font-family: serif; } </style> </head> <body> <div class="container"> <div class="top-panel"> <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10929167.jpg" alt="Avatar" class="yewoi-avatar justify-content-center"> <h2 class="title">Welcome to Trackers</h2> <p></p> </div> <div class="bottom-panel"> <p>Dear Customer,</p> <p style="margin-left: 20%;">We are TRACKERS. Please verify your account for enjoy all features... </p> <p><b>Verification code-:' + mail.verification + '</b></p> <p>Regards,</p> <p><b>Trackers Admin</b></p> </div> </div> </body> </html>'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info)
      }
    });
  })
};
