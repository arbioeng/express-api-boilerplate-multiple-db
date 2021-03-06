const HttpStatus = require('http-status-codes/index');
import studentService from '../services/student-service';

/**
 *
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
const createOne = async (request, response) => {
    try {
        const document = await studentService.createOne(request.body);
        response.status(HttpStatus.CREATED).json(document);
    } catch (e) {
        throw e;
    }
};

/**
 *
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
const updateOne = async (request, response) => {
    try {
        const result = await studentService.updateOne(request.params, request.query);
        response.status(result.nModified ? HttpStatus.OK : HttpStatus.BAD_REQUEST).json(result.nModified === 1 ? { status: "ok" } : {});
    } catch (e) {
        throw e;
    }
};

/**
 *
 * @param request
 * @param response
 * @returns {Promise<void>}
 */
const findOne = async (request, response) => {
    try {
        const requestParams = { ...request.body, ...request.query, ...request.params };
        const document = await studentService.findOne(requestParams);
        response.status(document ? HttpStatus.OK : HttpStatus.BAD_REQUEST).json(document || {});
    } catch (e) {
        throw e;
    }
};

module.exports = { findOne, createOne, updateOne };

