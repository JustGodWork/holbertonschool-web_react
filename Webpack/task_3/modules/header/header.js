import $ from 'jquery';
import '../header/header.css';

$('#logo').remove();
$('body').prepend('<div id="logo"></div>');
$('body').prepend('<h1>Holberton Dashboard</h1>');
console.log('Init header');
