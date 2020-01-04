const patterns = {
    authorization: ({login, password}) => {
        const errors = {};

        if (!login)
            errors.login = true;
        else if (!patterns.nickname.test(login) && !patterns.email.test(login))
            errors.login = 'Invalid nickname';

        if (!password)
            errors.password = true;
        else if (!patterns.password(password))
            errors.password = 'Invalid password';

        return errors;
    },
    login: /^[-_0-9A-Za-z.@]*$/,
    email: /^[-0-9.A-Za-z_]+@[A-Za-z]+\.[A-Za-z]{2,10}$/,
    nickname: /^[A-z0-9]{5,}$/,
    password: password => (
        password
        && /[a-z]+/.test(password)
        && /[A-Z]+/.test(password)
        && /\d/.test(password)
        && password.length >= 8
        && password.length <= 32
    ),
    passwordCreation: ({password, confirm}) => {
        if (patterns.password(password) && patterns.password(confirm) && password === confirm)
            return false;

        return {
            password: !patterns.password(password),
            confirm: confirm !== password,
        };
    }
};

export default () => patterns;