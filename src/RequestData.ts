class RequestData { 

    public reqmsg : string; 
    constructor(regMsg : string){
        this.reqmsg = regMsg;
    }

    splitGetMethod() : string{
        return this.reqmsg.substring(0,this.reqmsg.indexOf("/")).trim() ;
    }
    splitGetUrl() : string {
        return this.reqmsg.substring(this.reqmsg.indexOf("/"),this.reqmsg.indexOf('HTTP')).trim();
    }
    splitGetHttpVersion() : string {
        return this.reqmsg.substring(this.reqmsg.indexOf("HTTP"),this.reqmsg.indexOf('\r\n')).trim();
    }
    splitGetEntityBody() : string {
        return this.reqmsg.slice(this.reqmsg.indexOf('\r\n\r\n')).trim();
    }
}

export {RequestData};