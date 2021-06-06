"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var productSchema = new mongoose_1.default.Schema({
    shopName: {
        type: String
    },
    categoryName: {
        type: String
    },
    address: {
        type: String
    },
    product: {
        type: String
    },
    offer: {
        type: Number
    },
    expire: {
        type: Number
    },
    time: { type: Date, default: Date.now }
});
var productModel = mongoose_1.default.model("product", productSchema);
exports.default = productModel;
