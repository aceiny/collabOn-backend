const errhandler = (err,req,res,next) => {
    res.status(500).send('Server Breakdown')
} // create a middleware function to handle errors
module.exports = errhandler  // export the middleware function