const router = require("express").Router();

const Shop = require("../controller/shopController");

const autentikasi = require("../middlewares/authenticate");
const checkId = require("../middlewares/checkId");
const checkOwnership = require("../middlewares/checkOwnership");
const checkRole = require("../middlewares/checkRole");

// router.post("/", Shop.createShop);
router.get("/", Shop.findShops);
router.get("/:id", checkId, autentikasi, checkOwnership, Shop.findShopById);
router.patch(
  "/:id",
  checkId,
  autentikasi,
  checkOwnership,
  checkRole("Owner"),
  Shop.updateShop
);
// router.delete("/:id", Shop.deleteShop);

module.exports = router;
