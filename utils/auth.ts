export const checkAuthentication = () => {
    const cookies = document.cookie.split('; ');
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;

    if (token) {
        return true;
    } else {
        return false;
    }
};