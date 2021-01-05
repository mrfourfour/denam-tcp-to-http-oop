

class HttpServerMessage {
    
    private _httpVersion : string;
    private _stateCode : string;
    private _contentType: string;
    private _contentLenght: number = 0 ;
    private _body : string | number;

    constructor(httpVersions :string, stateCodes: string, contentTypes: string, bodys: string | number ){
      this._httpVersion =  httpVersions;
      this._stateCode = stateCodes;
      this._contentType = contentTypes;
      this._body = bodys;
      
      if (typeof this._body === 'string') { this._contentLenght = this._body.length; }
      else if (typeof this.body === 'number') { this._contentLenght = Math.ceil(Math.log10(this._body + 1)) }
      else { }
    }

    get httpVersion() {
        return this._httpVersion;
    }

    get stateCode() {
        return this._stateCode;
    }

    get contentType() {
        return this._contentType;
    }

    get contentLenght() {
        return this._contentLenght;
    }

    get body() {
        return this._body;
    }

    public responceMessage() {
       return this._httpVersion +" "+this._stateCode +"\r\n"+
       "Content-type:" +" "+ this._contentType + "\r\n" +
       "Content-Length:"+" " + this._contentLenght +"\r\n" +
       "\r\n"+this._body + "\r\n";
    }
}

export {HttpServerMessage};