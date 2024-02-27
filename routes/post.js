const router = require('express').Router();

module.exports = router;

router.post('/:id',(req,res)=> {
    res.json({msg : 'There is post method for post router and id is '+req.params.id});
});

router.route("/:id")
    .get((req,res)=> res.json({msg : "There is Get mothod for post router and id is "+req.params.id}))
    .patch((req,res) => res.json({msg : "There is patch mothod for post router and id is "+req.params.id}))
    .delete((req,res)=> res.json({msg : ' The Delete id is '+req.params.id}));