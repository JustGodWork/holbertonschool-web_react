import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document.body).prepend('<div id="logo"></div>');
$(document.body).append('<p>Holberton Dashboard</p>');
$(document.body).append('<p>Dashboard data for the students</p>');
const button = $('<button>Click here to get started</button>');
$(document.body).append(button);
$(document.body).append('<p id="count"></p>');
$(document.body).append('<p>Copyright - Holberton School</p>');

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

button.on('click', _.debounce(updateCounter, 500));
