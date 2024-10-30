import Cookies from 'universal-cookie';

const cookie = new Cookies();

/**
* @param {String} key
* @param {String} value
*/
const save = (key, value, remember = true) => {
    var date = null;

    if (!remember) {
        date = new Date();
        date.setHours(date.getHours() + 1);
    }

    cookie.set(key, value, { path: '/', expires: date });
}

/**
* @param {String} key
* @returns {object} 
*/
const get = (key) => {
    return cookie.get(key);
}

/**
* @param {String} key
*/
const clear = (key) => {
    cookie.remove(key);
}

const cookies = {
    save,
    get,
    clear
};

export default cookies;