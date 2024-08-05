


import { UserContact } from "../types/User";

type Error = { 
    [key: string]: string;
};

export const validateContact = (data: UserContact) => { 

    const errors: Error = {}; 

    if(!data.name) {
        errors["name"] = "O nome é obrigatório";
    } 
    
    if(!data.email) { 
        errors["email"] = "O e-mail é obrigatório";
    }

    return errors;
}