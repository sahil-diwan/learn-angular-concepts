const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser= require('body-parser');
const path = require('path');
const api_folder='./server/api/';
let isTestMode = false;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
});

/************************************************************API Defination--Add Other API's over here**********************************************************************/
app.get('/api/v1/posts', (req,res) => res.send(require(buildPath('./api/mocks/posts/posts.json'))));
/**********************************************************************************************************************************/
const apiFiles = fs.readdirSync(api_folder);
function buildPath(path){
    if(isTestMode){
        path = path.replace(".json","-test.json");
    }
    return path;
}
exports.buildPath=buildPath;

app.listen(8443, () => {
    console.log('Listening on port 8443');
})       