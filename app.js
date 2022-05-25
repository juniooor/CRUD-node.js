const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, resp)=> {

    //Criar user

        //receber informações do user, usando o url
        const params = queryString.parse(url.parse(req.url, true).search);
        //salvar infos
        fs.writeFile('users/'+params.id +'.txt', JSON.stringify(params), function (err) {
            if (err) throw err;
            console.log('saved!')
        });



    //atualizar user
    //buscar user
    //remover user


    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');
    resp.end("teste")
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em https://${hostname}:${port}/`);
});