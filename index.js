const express = require('express');

const application = express();

const port = process.env.PORT || 7777;

application.listen(port, () => console.log(`Server listening on port ${port}!`));

application.use('/', express.static('public'));