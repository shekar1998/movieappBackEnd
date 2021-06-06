"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("../Controller/controller");
var router = express_1.default.Router();
router.get('/api/catoegory', controller_1.getProduct);
router.post('/api/productAdd', controller_1.isAuthorize, controller_1.ProductAdd);
router.post("/api/signup", controller_1.signup);
router.delete("/api/delete/:shopName", controller_1.deleteProduct);
router.post("/api/login", controller_1.login);
router.get("/api/search/:categoryName", controller_1.getProductByCatogery);
exports.default = router;
