


import { User } from "../types/User";

type Error = { 
    [key: string]: string;
};

export const validate = (data: User) => { 

    const errors: Error = {}; 

    if(!data.name) {
        errors["name"] = "O nome é obrigatório";
    } 
    
    if(!data.email) { 
        errors["email"] = "O e-mail é obrigatório";
    }

    if(!data.password) {
        errors["password"] = "A senha é obrigatória";
    }

    if(data.password.length < 6) {
        errors["password"] = "A senha deve ter no mínimo 6 caracteres";
    }


    return errors;
}
