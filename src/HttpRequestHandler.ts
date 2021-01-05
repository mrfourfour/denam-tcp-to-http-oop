
import {HttpResponceHandler} from './HttpResponceHandler';

import * as net from 'net';

class  HttpRequestHandler {
    
    
    constructor() {    

    }

    static getRequestBuild(method: string ,url: string , socket: net.Socket, queryValue : string){
      
        if(method === 'GET') {
            switch(url) {

                case "/":
                    HttpResponceHandler.httpMainResponce(socket);
                    break;  
                
                case "/Profile":
                    HttpResponceHandler.httpProfileResponce(socket,queryValue);
                    break;

                default :
                    HttpResponceHandler.httpErrorResponce(socket);
                    break; 

            }
       }
       
    }

    static postRequestBuild(method : string ,url: string , socket: net.Socket, entityValue : number){
       
        if(method == 'POST') {
            switch(url) {
            
                case "/calculator":
                    HttpResponceHandler.httpCalculatorResponce(socket,entityValue);
                    break;  
                
                default :
                    HttpResponceHandler.httpErrorResponce(socket);
                    break;     
             }
        }
        
    }
}

export {HttpRequestHandler};
