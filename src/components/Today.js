let today = new Date();
let minute = today.getMinutes()
let hour = today.getHours();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let year = today.getFullYear();

const Today = day + '/' + month + '/' + year + '_' + hour + ':' + minute;

export default Today