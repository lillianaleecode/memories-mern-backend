
import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';

//const express = require('express') //with node, this syntax is no longer needed if we enable it. to enable it, go to package.json and add "type":"module"

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

