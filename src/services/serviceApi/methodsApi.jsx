import { statusUtility } from "../../utilities";

const get = async (url, id) => {
    try {
        const req = await fetch(`${url}/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await req.json();

        return { data: json.data, message: json.message, code: req.status };
    } catch (error) {
        return { message: error.message };
    }
}

const all = async (url) => {
    try {
        const req = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await req.json();

        return { data: json.data, message: json.message, code: req.status };
    } catch (error) {
        return { message: error.message };
    }
}

const create = async (url, body) => {
    try {
        const req = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await req.json();

        console.log()

        return { data: json.data, message: json.message, code: req.status };
    } catch (error) {
        return { message: error.message };
    }
}

const update = async (url, method, id, body) => {
    try {
        const req = await fetch(`${url}/${id}`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await req.json();

        return { data: json.data, message: json.message, code: req.status };
    } catch (error) {
        return { message: error.message };
    }
}

const remove = async (url, id) => {
    try {
        const req = await fetch(`${url}/id`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await req.json();

        return { message: json.message, code: req.status, index: (req.status === statusUtility.StatusCode.CREATED) ? id : 0 };
    } catch (error) {
        return { message: error.message };
    }
}

const methodService = {
    get,
    all,
    create,
    update,
    remove
}

export default methodService;