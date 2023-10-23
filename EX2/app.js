"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 8080;
app.use(bodyParser.json());
app.get('/cal', function (req, res) {
    // Handle GET request
    res.json({ answer: '0' });
});
app.post('/cal', function (req, res) {
    // Handle POST request
    var _a = req.body, A = _a.A, B = _a.B;
    if (typeof A === 'number' && typeof B === 'number') {
        var result = A * B;
        res.json({ answer: result.toString() });
    }
    else {
        res.status(400).json({ error: 'Invalid input' });
    }
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
