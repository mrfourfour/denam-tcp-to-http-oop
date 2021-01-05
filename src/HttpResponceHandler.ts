
import {HttpServerMessage} from './HttpServerMessage';

import * as net from 'net';
class HttpResponceHandler {

    
    constructor() {
       
    }
    
    static httpMainResponce (socket: net.Socket){

        let seccuseMain = new HttpServerMessage('HTTP/1.1','200 OK', 'text/html',"Helloworld");
        return socket.write(seccuseMain.responceMessage());

    }
    static httpProfileResponce (socket: net.Socket, body: string){
        
        let seccuseProfile = new HttpServerMessage('HTTP/1.1','200 OK', 'text/html', body);
        return socket.write(seccuseProfile.responceMessage());

    }
    
    static httpCalculatorResponce (socket: net.Socket, body: number){
        
        let seccuseCalculator = new HttpServerMessage('HTTP/1.1','200 OK', 'text/html', body);
        return socket.write(seccuseCalculator.responceMessage());

    }

    static httpErrorResponce (socket: net.Socket) {
        let error = new HttpServerMessage('HTTP/1.1','404 Not Found', 'text/html', "");
        return socket.write(error.responceMessage());
    }

}


export {HttpResponceHandler};