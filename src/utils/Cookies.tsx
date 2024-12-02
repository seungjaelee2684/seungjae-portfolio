export const cookies = () => {
    const cookie = document.cookie
        .split('; ')
        .map(c => c.split('=')[0]);
    return cookie.includes('sj-lg');
};