/**
 * @readonly
 * @enum {String}
 */
const Public = {
    ERROR_PATH: '/maintenance',
    HOME: '/',
    LOGIN: '/login',
};

/**
 * @readonly
 * @enum {String}
 */
const Private = {
    USER: {
        PATH: '/user',
        SUB: {
            LOG: 'user',
            REQUEST: 'user/request'
        }
    },
    GRAN_LOGIA: {
        PATH: '/logia',
        SUB: {
            LOG: 'logia',
        }
    }
};

const routeUtility = {
    Private,
    Public
};

export default routeUtility;