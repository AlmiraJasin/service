export const saveLoggedInUser = (key, user) => {
    localStorage.setItem("session", key);
    localStorage.setItem("user", JSON.stringify(user));
}

export const logout = () => {
    localStorage.removeItem('session');
    localStorage.removeItem("user");
}

/* export const authConfig = () => {
    return {
        headers: { Authorization: `${localStorage.getItem('session') ?? ''}` }
    }
} */