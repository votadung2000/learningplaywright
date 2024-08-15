
import axios from 'axios';

async function sendRequest(url) {
    console.log('url', url)
    axios({
        method: 'get',
        url,
        data: {}
    }).then(function (response) {
        console.log("response", response)
    });
    // const response = await fetch(url);
    // return await response.json();
}

export default sendRequest

// RequestHelper.js
// export default function sendRequest() {
//     // Hàm gửi yêu cầu
// }
