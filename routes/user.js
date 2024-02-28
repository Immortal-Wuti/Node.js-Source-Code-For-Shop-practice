const router = require('express').Router();

const controller = require('../controllers/user');

router.get('/',controller.all);

router.get('/:id',controller.get);

router.post('/',controller.post);

router.patch('/',controller.edit);

router.delete("/:id",controller.drop);

// router.post("/:id",(req,res)=>{
//     res.json({msg : "There is post method for user Route and id is "+req.params.id});
// });

// router.route("/:id")
//     .get((req,res)=> res.json({msg : "There is get method for user Route and id is "+req.params.id}))

//     .patch((req,res)=> res.json({msg : "There is patch method for user route and is is "+req.params.id}))

//     .delete((req,res)=> res.json({msg : "Delete id is "+req.params.id}));

// router.get('/:id',(req,res)=>{
//     res.json({msg : "There is get method for user Route and id is "+req.params.id});
// });


// router.patch('/:id',(req,res)=>{
//     res.json({msg : "There is patch method for user route and is is "+req.params.id});
// });

// router.delete('/:id',(req,res)=>{
//     let id = req.params.id;
//     res.json({msg : "Delete id is "+id});
// });


module.exports = router;