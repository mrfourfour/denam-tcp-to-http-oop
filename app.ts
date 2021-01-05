'use strict';

import * as net from 'net';

import {HttpRequestHandler} from './src/HttpRequestHandler'
import {RequestData} from './src/RequestData';
import {HttpClientMessage}from './src/HttpClientMessage';

const server = net.createServer(function(socket) {
    
    console.log('클라이언트 접속');


    socket.on('data', function(chunk ) {

        let requestData = new RequestData(chunk.toString());
        console.log(chunk.toString())
        let httpClientMsg = new HttpClientMessage(requestData.splitGetUrl(), requestData.splitGetMethod(), requestData.splitGetHttpVersion(),requestData.splitGetEntityBody());

        HttpRequestHandler.getRequestBuild(httpClientMsg.msgMethod,httpClientMsg.url, socket, httpClientMsg.httpGetQueryValue());

        HttpRequestHandler.postRequestBuild(httpClientMsg.msgMethod,httpClientMsg.url, socket, httpClientMsg.httpGetEntityValue());
        

    });
     
    socket.on('end', function() {
        console.log('클라이언트 접속 종료');
    });

});

server.listen({
    host: 'localhost',
    port: 8043
},function() {
    const address = server.address();
    console.log(address);
})

/*server.on('close', function() {
    console.log('Server closed');
});
*/