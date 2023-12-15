const errhandler = (err,req,res,next) => {
    console.log(err)
    res.status(500).send('Server Breakdown')
} // create a middleware function to handle errors
module.exports = errhandler  // export the middleware function