/**
 * Configuration middleware to enable cors and set some other allowed headers.
 *  You can also just use the 'cors' package.
 */
export function globalResponseHeaders(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header(
        'Access-Control-Allow-Headers',
        'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
    );
    response.header(
        'Access-Control-Allow-Methods',
        'POST,GET,PATCH,DELETE,OPTIONS'
    );
    return next();
}
