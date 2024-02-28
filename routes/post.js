const router = require('express').Router();

const controller = require('../controllers/post');

router.get('/',controller.all);

router.post('/',controller.post);

router.route('/:id')
    .get(controller.get)
    .patch(controller.patch)
    .delete(controller.drop)


module.exports = router;

// router.post('/:id',(req,res)=> {
//     res.json({msg : 'There is post method for post router and id is '+req.params.id});
// });

// router.route("/:id")
//     .get((req,res)=> res.json({msg : "There is Get mothod for post router and id is "+req.params.id}))
//     .patch((req,res) => res.json({msg : "There is patch mothod for post router and id is "+req.params.id}))
//     .delete((req,res)=> res.json({msg : ' The Delete id is '+req.params.id}));