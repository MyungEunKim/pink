const express = require('express');
const app = express();
app.use('/', express.static(__dirname +'/../front/public'));
// app.use((req, res, next) => {
//     return res.status(200).send('hihi welcome');
//   });
app.listen(3000, function() {
	console.log('hihi');
})
