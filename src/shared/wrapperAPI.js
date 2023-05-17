

module.exports.wrapperAPI = (handler) =>{
    return async (req,res) =>{
        try {
            await handler(req,res);
        } catch (error) {
            console.log('[wrapperApi]', error.toString(), error);
            return res.status(500).send({message: `Internal server error: ${error.toString()}`});
        }
        
    }
}