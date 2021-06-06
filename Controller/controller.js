"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByCatogery = exports.deleteProduct = exports.isAuthorize = exports.login = exports.signup = exports.ProductAdd = exports.getProduct = void 0;
var modal_1 = __importDefault(require("../Modal/modal"));
var products_1 = __importDefault(require("../Modal/products"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, products_1.default.find({}).sort({ offer: -1 })];
            case 1:
                data = _a.sent();
                res.status(200).send(data);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(400).send({
                    message: err_1.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProduct = getProduct;
var getProductByCatogery = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, products_1.default.find({ categoryName: req.params["categoryName"] }).sort({ offer: -1 })];
            case 1:
                data = _a.sent();
                console.log('data', data);
                res.status(200).send(data);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(400).send({
                    message: err_2.message
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProductByCatogery = getProductByCatogery;
var signup = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, newUser, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                if (!(req.body.role === 'admin')) return [3 /*break*/, 2];
                return [4 /*yield*/, modal_1.default.create(req.body)];
            case 1:
                newUser = _a.sent();
                res.json({
                    data: {
                        users: newUser,
                    },
                });
                res.status(200).json({
                    status: 'SuccessFul',
                });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, modal_1.default.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                })];
            case 3:
                newUser = _a.sent();
                res.send(newUser);
                res.status(200).json({
                    status: 'SuccessFul',
                });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                err_3 = _a.sent();
                res.status(400).json({
                    status: 'fail',
                });
                console.log(err_3);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.signup = signup;
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, _b, token, err_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 5, , 6]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    // @ts-ignore
                    return [2 /*return*/, res.status(400).json({
                            status: 'The fields are empty please enter the data',
                        })];
                }
                return [4 /*yield*/, modal_1.default.findOne({ email: email })];
            case 1:
                user = _c.sent();
                if (!user) return [3 /*break*/, 4];
                _b = !user;
                if (_b) return [3 /*break*/, 3];
                return [4 /*yield*/, user.correctPassword(password, user.password)];
            case 2:
                _b = !(_c.sent());
                _c.label = 3;
            case 3:
                // @ts-ignore
                if (_b) {
                    // @ts-ignore
                    // res.status(400).json({
                    //   status: 'No Users',
                    // });
                    return [2 /*return*/, res.send(400).json({
                            message: 'UnSuccessFul'
                        })];
                }
                else {
                    token = jsonwebtoken_1.default.sign({ authorization: user.email }, 'VerySecretKey', { expiresIn: '1h' });
                    res.json({
                        data: {
                            message: 'Login SuccessFul',
                            token: token,
                            user: user
                        }
                    });
                    // @ts-ignore
                    res.json({});
                }
                _c.label = 4;
            case 4:
                next();
                return [3 /*break*/, 6];
            case 5:
                err_4 = _c.sent();
                console.log(err_4);
                res.json({
                    message: 'UnSuccessFul',
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var isAuthorize = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, decode, requestUser, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.log(req.headers);
                if (!(req.headers && req.headers.authorization)) return [3 /*break*/, 2];
                token = req.headers.authorization.split(' ')[1];
                console.log('Token', token);
                decode = jsonwebtoken_1.default.verify(token, "VerySecretKey");
                console.log('Decode', decode);
                return [4 /*yield*/, modal_1.default.findOne(decode.email)];
            case 1:
                requestUser = _a.sent();
                console.log('User', requestUser);
                try {
                    if (!requestUser) {
                        return [2 /*return*/, res.json({ success: false, message: 'Unauthorized Access' })];
                    }
                    else {
                        req.user = requestUser;
                        res.json({ success: true, message: ' Successful Access' });
                        next();
                    }
                }
                catch (err) {
                    if (err.name === 'JsonWebTokenError') {
                        return [2 /*return*/, res.json({ success: false, message: 'Unauthorized Access' })];
                    }
                    if (err.name === 'TokenExpiredError') {
                        return [2 /*return*/, res.json({ success: false, message: 'Session Expire please try sign again' })];
                    }
                }
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.log(err_5);
                res.status(400).json({
                    message: 'Error in Authorization',
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.isAuthorize = isAuthorize;
var ProductAdd = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categoryCheck, shopDetails, deleteIn, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                console.log('Position', req.body);
                return [4 /*yield*/, modal_1.default.findOne({ category: req.body.categoryName })];
            case 1:
                categoryCheck = _a.sent();
                console.log('Res ', categoryCheck);
                if (!categoryCheck) return [3 /*break*/, 3];
                return [4 /*yield*/, products_1.default.create({
                        shopName: req.body.shopName,
                        address: req.body.address,
                        product: req.body.product,
                        offer: req.body.offer,
                        categoryName: req.body.categoryName,
                        expire: req.body.expire
                    })];
            case 2:
                shopDetails = _a.sent();
                console.log('Position', shopDetails);
                deleteIn = req.body.expire * 3600000;
                console.log('Delete One  ', deleteIn);
                console.log('R  ', shopDetails);
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var pos;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, products_1.default.deleteOne({
                                    shopName: req.body.shopName
                                })];
                            case 1:
                                pos = _a.sent();
                                console.log('pos', pos);
                                return [2 /*return*/];
                        }
                    });
                }); }, deleteIn);
                res.send(shopDetails);
                return [3 /*break*/, 4];
            case 3:
                res.send(400).json({
                    message: 'Error Cannot Resolve'
                });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                err_6 = _a.sent();
                res.send(err_6.message);
                console.log(err_6);
                res.json({ message: ' Access' });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.ProductAdd = ProductAdd;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var book, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.params.shopName);
                return [4 /*yield*/, products_1.default.deleteOne({ shopName: req.params['shopName'] })];
            case 1:
                book = _a.sent();
                console.log('bppk ', book);
                res.status(200).send(book);
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                console.log(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
