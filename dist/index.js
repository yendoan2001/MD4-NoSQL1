"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const mongoose_1 = __importDefault(require("mongoose"));
const customer_router_1 = __importDefault(require("./src/router/customer.router"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 8000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set('views', './src/views');
const DB_URL = 'mongodb+srv://YenDoan:yendoan1A@yendoan0501.117vzjo.mongodb.net/customers';
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(body_parser_1.default.json());
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use('/', customer_router_1.default);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map