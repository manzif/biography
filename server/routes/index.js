import Messages from '../controllers/messages';

    export default (app) => {

        app.get('/api', (req, res) => res.status(200).send({
            message: 'Welcome to the BookStore API!',
        }));

        app.post('/api/messages', Messages.sendMessage); // API route for receive messages
        app.get('/api/messages', Messages.listMessages); // API route to list all messages received
        app.delete('/api/messages/:messageId', Messages.deleteMessage);
};
