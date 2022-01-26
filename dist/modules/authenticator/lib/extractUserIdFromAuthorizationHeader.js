"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildExtractUserIdFromAuthorizationHeader = void 0;
var lib_1 = require("../../../lib");
function buildExtractUserIdFromAuthorizationHeader(privateKey) {
    return extractUserIdFromAuthorizationHeader;
    function extractUserIdFromAuthorizationHeader(authorization) {
        var jwtSigner = (0, lib_1.buildJwtSigner)(privateKey);
        if (authorization) {
            var token = authorization.split(' ')[1];
            var userId = jwtSigner.verifyToken(token);
            return userId;
        }
        else {
            throw lib_1.errorHandlers.authenticationErrorHandler.build('No authorization value provided');
        }
    }
}
exports.buildExtractUserIdFromAuthorizationHeader = buildExtractUserIdFromAuthorizationHeader;
