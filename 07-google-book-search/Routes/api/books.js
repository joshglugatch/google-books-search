const router = require("express").Router();
const bookController = require("../../controllers/controller");


// router.route("/").get(function(req,res){
//     res.json("Working");
// })

router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create)

router.route("/:id").delete(bookController.remove);

router 
    .route("/search")
    .get(bookController.findById)


module.exports = router;