/**
 * @readonly
 * @enum {number}
 */
const StatusAPI = {
    IDLE: 0,
    PENDING: 1,
    SUCCESSED: 2,
    FAILED: 3,
}

/**
 * @readonly
 * @enum {number}
 */
const StatusUser = {
    IDLE: 0,
    ACTIVE: 1,
    SUSPENDE: 2,
    ELIMINATE: 3
}

const StatusCode = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

const statusUtility = {
    StatusAPI,
    StatusUser,
    StatusCode
}

export default statusUtility;