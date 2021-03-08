let today   = new Date();
let minute  = (today.getMinutes() < 9) ? '0' + today.getMinutes() : today.getMinutes();
let hour    = (today.getHours() < 9) ? '0' + today.getHours() : today.getHours();
let day     = String(today.getDate()).padStart(2, '0');
let month   = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
let year    = today.getFullYear();

const Today = day + '/' + month + '/' + year + '_' + hour + ':' + minute;

export default Today