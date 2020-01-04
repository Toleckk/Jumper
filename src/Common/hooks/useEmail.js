export default email => {
    const domain = email.match(/@.+/);

    if (domain)
        switch (domain[0]) {
            case '@gmail.com':
                return {
                    name: 'Gmail',
                    url: 'https://gmail.com/'
                };
            case '@bk.ru':
            case '@list.ru':
            case '@mail.ru':
                return {
                    name: 'Mail.ru',
                    url: 'https://mail.ru/'
                };
            default:
                return '';
        }
};