const router = require("express").Router();

router.get('/', postController.readPost);
router.post('/', postController.createPost);
router.delete('/:id', postController.deletePost);

module.exports = router;