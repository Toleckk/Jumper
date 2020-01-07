const patterns = {
    authorization: ({login, password}) => {
        const errors = {};

        if (!login)
            errors.login = true;
        else if (!patterns.nickname.test(login) && !patterns.email.test(login))
            errors.login = 'Invalid login';

        if (!password)
            errors.password = true;
        else if (!patterns.password.test(password))
            errors.password = 'Invalid password';

        return errors;
    },
    login: /^[_0-9A-Za-z.@]*$/,
    // eslint-disable-next-line no-useless-escape
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    nickname: /^(?!.*__)(?!_)(?!.*_$)(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9._]{5,69}$/,
    password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    passwordCreation: ({password, confirm}) => {
        if (patterns.password.test(password) && patterns.password.test(confirm) && password === confirm)
            return false;

        return {
            password: !patterns.password.test(password),
            confirm: confirm !== password,
        };
    }
};

export default () => patterns;