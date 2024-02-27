const express = require('express');
const app = express();

app.use(express.json());

const userRoute = require('./routes/user');

app.use('/users', userRoute);

const postRouter = require('./routes/post');

app.use('/posts',postRouter);


app.listen(3000,console.log("Sever is running at port 3000!"));
