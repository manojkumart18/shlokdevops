const express = require('express');
const app = express();
 
// Getting Request
app.get('/releaseTrigger', (req, res) => {
    const data = JSON.stringify({
        text: req.body.message.text
    });

    const options = {
        hostname: 'chat.googleapis.com',
        port: 443,
        path: '/v1/spaces/AAAAeiEc8iU/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=UHt_Qv_Qwe_QQh1vaf-4rXE2n_J9tz76iHcoZHQQoAY%3D',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }

    const botReq = https.request(options, (res) => {
        // context.log(`statusCode: ${res.statusCode}`)

        res.on('data', (d) => {
            // context.log(d)
        })

        res.on('end', () => {

            // context.done()
        });

        // context.done()
    });

    botReq.on('error', (error) => {
        // context.log(error)
        // context.res = {
        //     status: 500,
        //     body: 'error'
        // };
        // context.done()
    });

    botReq.write(data);
    botReq.end();

    res.send("Triggered from Shlok Azure bot");
})
 
// Establishing the port
const PORT = process.env.PORT ||5000;

app.listen(PORT, console.log(
    `Server started on port ${PORT}`));

