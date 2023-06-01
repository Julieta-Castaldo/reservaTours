export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 4 && password.length <=10;
};

export const validateTextFields = (value) => {
    return value !== ''
}