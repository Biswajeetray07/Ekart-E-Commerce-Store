import nodemailer from 'nodemailer'
import 'dotenv/config'

const verifyEmail = (token, email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD // Fixed to match your .env file
        },
        tls: {
            rejectUnauthorized: false // Fixes the self-signed certificate error
        }
    });

    const mailConfigurations = {

        from: process.env.MAIL_USER,

        to: email,

        subject: 'Email Verification',

        text: `Hi! There, You have recently visited 
           our website and entered your email.
           Please follow the given link to verify your email
           http://localhost:5173/verify/${token} 
           Thanks`
    };
    transporter.sendMail(mailConfigurations, function (error, info) {
        if (error) {
            console.log("Email sending failed:", error);
            return;
        }
        console.log('Email Sent Successfully');
        console.log(info);
    });
}

export default verifyEmail;