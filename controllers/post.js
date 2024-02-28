const all = async(req,res,next) =>{
    res.json({msg : "All Posts"});
}

const post = async(req,res,next) =>{
    res.json({msg : "Add new post",result :req.body});
}

const get = async(req,res,next) =>{
    res.json({msg : "Single Post and id is "+req.params.id});
}


const patch = async(req,res,next) =>{
    res.json({msg : "Patch Post"});
}

const drop = async(req,res,next) =>{
    res.json({msg : "Delete post"});
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}

