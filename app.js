const express    = require('express');
const app        = express();
const path       = require('path');
const fileUpload = require('express-fileupload');

app.use('/files', express.static('./uploads'));
app.use(express.static('./static'));
app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true
}));

app.post('/upload', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body) {
        res.status(401).send(JSON.stringify({
            success: false,
            error: 'Invalid key!'
        }));
    } else {
        const key = req.body.key;
        if (!key === "") {
            res.status(401).send(JSON.stringify({
                success: false,
                error: 'Invalid key!'
            }));
        } else {
            const file = req.files.file;
            let fileExtension = path.extname(file.name);
            const newFileName = Math.random().toString(36).slice(-6);
            file.mv('./uploads/' + newFileName + fileExtension, function(err) {
                if (err) return console.log(err);
            });
            res.status(200).send('https://derpyenterprises.org/files/' + newFileName + fileExtension);
        }
    }
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'static/404.html'));
});

app.listen(80, () => {
    console.log("hi");
}); 