import express from 'express';
fetch('http://localhost:5001/curl')
    .then(response => console.log(response.status))
    .catch(error => console.error('Error:', error));

