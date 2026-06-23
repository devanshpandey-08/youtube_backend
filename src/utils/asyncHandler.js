const asyncHandler = (requestHandler) => {    
   (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    }
}


export default asyncHandler;


const asyncHandlwer = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            res.status(500).json({ message: error.message });
            next(error);
        }
    };
}
const asyncHandler =()=>{}

const ayncHandler = (fn) => async() => { }
