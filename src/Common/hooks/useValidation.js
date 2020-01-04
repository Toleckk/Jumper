const patterns = {
    authorization: ({login, password}) => ({
        login: !login || !login.length,
        password: !password || !password.length
    }),
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
        if(this.password(password) && this.password(confirm) && password === confirm)
            return false;

        return {
            password: !this.password(password),
            confirm: confirm !== password,
        };
    }
};

const useValidation = (...fields) => fields.reduce((acc, field) => ({...acc, [field]: patterns[field]}), {});

export default useValidation;