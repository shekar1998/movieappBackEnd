import express from "express";
import { signup, login, getProduct, ProductAdd, isAuthorize, deleteProduct, getProductByCatogery } from '../Controller/controller'
const router = express.Router();

router.get('/api/catoegory', getProduct)
router.post('/api/productAdd', isAuthorize, ProductAdd)
router.post("/api/signup", signup );
router.delete("/api/delete/:shopName", deleteProduct);
router.post("/api/login", login );
router.get("/api/search/:categoryName", getProductByCatogery )

export default router