const router = require("express").Router();
const userController = require("");

router.get("/", userController.getAllUsers); 
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;