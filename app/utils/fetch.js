import { useAuthStore } from '@/stores/authStore';

async function C_Fetch(url, method = 'GET', body = null) {
    const jwt = localStorage.getItem("jwt");
    const headers = {
        'Content-Type': 'application/json',
        ...(jwt && { Authorization: `Bearer ${jwt}` }),
    };

    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(BaseURL + url, options);

    if (response.ok) {
        const data = await response.json();
        console.log('data res', data);

        if (data.jwt) {
            const authStore = useAuthStore();
            authStore.setUser(data.user);
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user", JSON.stringify(data.user));
        }

        return data;
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

export default C_Fetch;