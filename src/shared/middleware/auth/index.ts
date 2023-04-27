import Response from '../../../utils/response'
const authMiddleWare = (app) => {
app.use(function(request, response, next) {
    var pathArray = request.originalUrl.split('/');
    const token = request.headers['api_key'] != process.env.API_KEY;
    if(token)
    {
        return Response.UNAUTHORIZED({response});
    }
    next();
});
}

export default authMiddleWare