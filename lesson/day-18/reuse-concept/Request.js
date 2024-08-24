class Request {

    constructor(url, headers = {}) {
        this.url = url;

    }

    setMethod(method){
        this.headers = {...this.headers, method: method};
    }

    send(){
        console.log((`Sending request with headers: ${this.headers}`));
    }

    verifyResponse() {
        console.log(`Verifying the response..`);
        
    }

}

module.exports = Request;

// let request = new Request("https:something.com/posts", {method: 'GET'});
// request.send();
// request.verifyResponse();
