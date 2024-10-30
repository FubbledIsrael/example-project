import cookies from "../cookies.service";

const tokenKey = import.meta.env.VITE_TOKEN_SESSION;
const token = cookies.get(tokenKey);
const api = `${import.meta.env.VITE_URL_API}auth`;

const login = async (body) => {
    try {
        const req = await fetch(`${api}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await req.json();

        if (req.ok) {
            cookies.save(tokenKey, json.token_session, body.remember);
        }

        return { data: json.data, code: req.status, message: json.message };
    } catch (error) {
        return { message: error.message };
    }
}

const authentication = async () => {
    try {
        const req = await fetch(`${api}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            }
        });
        const json = await req.json();

        return { data: json.data, code: req.status, message: json.message };
    } catch (error) {
        return { message: error.message };
    }
}

const authService = {
    login,
    authentication
};

export default authService;