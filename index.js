
exports._cors = {
    init: function (app) {
        var allowCrossDomain = function (req, res, next) {
            res.header('Access-Control-Allow-Origin', process.env.CORS_ALLOW_ORIGIN);
            res.header('Access-Control-Allow-Methods', process.env.CORS_ALLOW_METHODS);
            // add or remove headers in the config file to add or remove headers from the request
            res.header('Access-Control-Allow-Headers', process.env.CORS_ALLOW_HEADERS);
            // intercept OPTIONS method
            if ('OPTIONS' == req.method) {
                res.sendStatus(200);
            } else {
                next();
            }
        };
        app.use(allowCrossDomain);
    }
}