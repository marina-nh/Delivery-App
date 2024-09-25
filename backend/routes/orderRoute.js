import express from "express"
import authMiddleware from  "../middleware/auth.js"
import { placeOrder, verifyOrder, userOrders} from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders)
export default orderRouter;