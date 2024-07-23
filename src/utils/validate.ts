


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
        errors["password"] = "A senha precisa ter no mínimo 6 caracteres";
    }

    if(!data.confirmPassword) {
        errors["confirmPassword"] = "A confirmação de senha é obrigatória";
    }    

    if(data.password !== data.confirmPassword) { 
        errors["confirmPassword"] = "A confirmação de senha precisa ser igual a senha que você digitou";
    }

    if(!data.agree) { 
        errors["agree"] = "Você precisa concordar com os termos";
    }

    return errors;
}