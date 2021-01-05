


class HttpClientMessage{
    private _url : string;
    private _requestMethod : string;
    private _httpVersion: string;
    private _entityBody: object = {};
    private _query: object = {};

    constructor(urls: string, methods: string, httpVersions: string, entityBody: string) {
        
        if (urls.indexOf("?")>0) {
            
            this._url = urls.substring(0,urls.indexOf("?"));
            this._query = urls.substring(urls.indexOf("?") + 1).split("&").map(it => it.split("=")).reduce((acc: any , it) => {
                acc[it[0]] = it[1];
                return acc;
              }, {});;
            
        } else { 
            this._url = urls;
            
        }
        
        if (entityBody.valueOf() !== "") {

            this._entityBody = entityBody.split("&").map(it => it.split("=")).reduce((acc: any , it ) => {
                acc[it[0]] = it[1];
                return acc;
            }, {});
            
        } else {
            this._entityBody = {};
        }
        
        this._requestMethod = methods;
        this._httpVersion = httpVersions;
     
    }
    
    get url() {
        return this._url;
    }

    get msgMethod() {
        return this._requestMethod;
    }

    get httpVersion() {
        return this._httpVersion;
    }

    get entityBody() {
        return this._entityBody;
    }

    get query() {
        return this._query;
    }

    public httpGetQueryValue() : string {

        let queryValue : string = "";
        for(const [key, value] of Object.entries(this._query)) {    
            
            queryValue += value;

        }
        return queryValue;
        
    }

   public httpGetEntityValue() : number {
       let addValue : number = 1;
        for(const [key, value] of Object.entries(this._entityBody)) {
            
            addValue *= value;

        }
        return addValue;
       
    }
}

export {HttpClientMessage};