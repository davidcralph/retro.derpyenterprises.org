/*
  _____                          ______       _                       _               
 |  __ \                        |  ____|     | |                     (_)              
 | |  | | ___ _ __ _ __  _   _  | |__   _ __ | |_ ___ _ __ _ __  _ __ _ ___  ___  ___ 
 | |  | |/ _ \ '__| '_ \| | | | |  __| | '_ \| __/ _ \ '__| '_ \| '__| / __|/ _ \/ __|
 | |__| |  __/ |  | |_) | |_| | | |____| | | | ||  __/ |  | |_) | |  | \__ \  __/\__ \
 |_____/ \___|_|  | .__/ \__, | |______|_| |_|\__\___|_|  | .__/|_|  |_|___/\___||___/
                  | |     __/ |                           | |                         
                  |_|    |___/                            |_|                
MIT License
Github: https://github.com/ohlookitsderpy/derpyenterprises.org
*/
const express           = require('express');
const app               = express();
const { join, extname } = require('path');
const fileUpload        = require('express-fileupload');

app.use('/files', express.static('./uploads'));
app.use(express.static('./static'));
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true
}));

app.post('/upload', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body) {
        res.status(401).send(JSON.stringify({
            success: false,
            error: 'Invalid key!'
        }));
    } else {
        if (!req.body.key === "") {
            res.status(401).send(JSON.stringify({
                success: false,
                error: 'Invalid key!'
            }));
        } else {
            const newFileName = Math.random().toString(36).slice(-6);
            req.files.file.mv('./uploads/' + newFileName + extname(req.files.file.name), (err) => {
                if (err) return console.log(err);
            });
            res.status(200).send('https://derpyenterprises.org/files/' + newFileName + extname(req.files.file.name));
        }
    }
});

app.get('*', (req, res) => {
    res.status(404).sendFile(join(__dirname, 'static/404.html'));
});

app.listen(80, () => {
    console.log("hi");
}); 
