"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var csvtojson_1 = __importDefault(require("csvtojson"));
var constants_1 = require("./config/constants");
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/', function (req, res) {
    csvtojson_1.default().fromFile('students.csv').then(function (students) {
        res.json(students);
    });
});
app.listen(constants_1.PORT);
