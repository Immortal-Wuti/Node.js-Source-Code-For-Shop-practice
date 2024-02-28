const all = async(req,res,next)=>{
    res.json({msg :"All users"});
}

const get = async(req,res,next) =>{
    res.json({msg : "Single user with Get and id is "+req.params.id});
}

const post = async(req,res,next) =>{
    res.json({msg :"Post method for user controller",result :req.body});
}

const edit = async(req,res,next) =>{
    res.json({msg :"The patch method for User Controller", result : req.body})
}

const drop = async(req,res,next) =>{
    res.json({msg : "Single user with Get and id is "+req.params.id});
}

module.exports = {
    all,
    get,
    post,
    edit,
    drop
}