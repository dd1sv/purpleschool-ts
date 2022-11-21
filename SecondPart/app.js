// Продвинутые
// union type
var arr = ['sdf', 1];
function logId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj);
    }
    else {
        console.log(obj);
    }
}
// Literla Types
// Example
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
function fetchWithAuth(url, method) {
}
function fetchWithAuthSecond(url, method) {
}
fetchWithAuthSecond('s', 'get');
var a = 'asds';
var method = 'post';
fetchWithAuthSecond('s', method);
function fetchWithAuthThird(url, method) {
}
