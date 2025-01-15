export const cookies = () => {
    const cookie = document.cookie
        .split('; ')
        .map(c => c.split('=')[0]);
    return cookie.includes('sj-lg');
};

export const visitCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    return cookies.some(cookie => cookie.startsWith(`${name}=`));
};