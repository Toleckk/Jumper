import React from 'react';

const useRegistrationEmail = () => React.useContext(RegistrationEmailContext);

const RegistrationEmailProvider = ({children}) => {

    const [email, setEmail] = React.useState('');
    const value = {email, setEmail};

    return (
        <RegistrationEmailContext.Provider value={value}>
            {children}
        </RegistrationEmailContext.Provider>
    );
};

const RegistrationEmailContext = React.createContext({});

export {RegistrationEmailProvider, useRegistrationEmail};