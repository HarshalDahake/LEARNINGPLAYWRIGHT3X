
function apiRequest() {
    return new Promise(function (resolve) {
        // making a request
        // .get('/foo/bar', {
        resolve({ status: 200 });
    });
}

async function runApiRequest() {
    let response = await apiRequest();
    console.log("API status:", response.status);
}
runApiRequest();