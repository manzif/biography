import model from '../models';
import Validate from '../helpers/validations';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

    const { Message } = model;

    class Messages {

        static listMessages(req, res) {
            return Message.findAll().then(messages => {
              res.status(200).send(messages);
            });
        }

        static async sendMessage(req, res) {

            const result = Validate.validateMessage(req.body);
                    if (result.error) {
                        return res.status(400).json({ status: 400, message: result.error.details[0].message});
            }

            try{  
                const message = {
                    fullname: req.body.fullname, 
                    email :req.body.email, 
                    telephone : req.body.telephone,
                    message: req.body.message
                }
                
                const output = `
                    <p>You have a new message from your website</p>
                    <h3>contacts details</h3>
                    <ul>
                        <li>fullname: ${req.body.fullname}</li>
                        <li>email :${req.body.email}</li>
                        <li>telephone : ${req.body.telephone}</li>
                    </ul>
                    <h3>Message</h3>
                    <p>${req.body.message}</p>
                `;
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    // secure: true,
                    service: 'gmail',
                    auth: {
                        type: "login",
                        user: "brune.ferande@gmail.com",
                        pass: "fernande73+",
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                  });
                  
                  // send mail with defined transport object
                  let mailOptions = {
                    from: '"Manzi website" <brune.ferande@gmail.com>',
                    to: "manzif60@gmail.com",
                    subject: "A message from your website",
                    text: "Hello world?",
                    html: output
                  };
                  
                  transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      return console.log(error)
                    }
                    console.log("Message sent: %s", info.messageId);
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                });
                
                Message.create(message)
                  return res.status(200).json({
                    status:200,
                    shoutout: "Message well recieved. I will get back to you soon!!Thanks",
                    message
                });

                
            }catch(error) {
                res.status(500).send({ message: "byanze" });
            }
        }

        static async deleteMessage(req, res) {

            const message = await Message.findByPk(req.params.messageId);
            if (!message) {
                return res.status(400).json({
                    status: 400,
                    error: `Message does not exist or already deleted`
                });
            }
            message.destroy();
                return res.status(200).json({
                    message: `The message was successfully deleted`
            });
        }
    }

export default Messages;
