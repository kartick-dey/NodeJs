const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');

const downloadFile = async () => {

    const path = Path.resolve(__dirname, 'files', 'data.pem')

    const url = 'https://jsonplaceholder.typicode.com/posts/1'

    const response = Axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
    }).then(response => {
        response.data.pipe(Fs.createWriteStream(path));
        return new Promise((resolve, reject) => {
            response.data.on('end', () => {
                file_content = Fs.readFileSync(path);
                data = Buffer.from(file_content).toString('base64')
                console.log(Buffer.from(data).toString('ascii'));
                resolve(path)
            })
            response.data.on('error', error => {
                reject(error)
            })
        })
    })


};


downloadFile().then((path) => {
    console.log(`Download finished at ${path}`)
})
    .catch(error => {
        console.log(`Error: ${error}`)
    })