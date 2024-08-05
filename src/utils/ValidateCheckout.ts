
import { UserCheckout } from "../types/User";

type Error = { 
    [key: string]: string;
};

export const ValidateCheckout = (data: UserCheckout) => {

    const errors: Error = {}; 

    if(!data.firstName) {
        errors["fisrtName"] = "O primeiro nome é obrigatório";
    } 

    if(!data.lastName) {
        errors["lastName"] = "O sobrenome é obrigatório";
    } 
    
    if(!data.emailAdress) { 
        errors["emailAdress"] = "O e-mail é obrigatório";
    }

    if(!data.onAdress) { 
        errors["onEmail"] = "O novo e-mail é obrigatório";
    }

    if(!data.zipCode) {
        errors["zipCode"] = "O CEP é obrigatório";
    }

    if(!data.street) {
        errors["street"] = "A rua é obrigatória";
    }

    if(!data.country) {
        errors["country"] = "O país/estado é obrigatório";
    }

    if(!data.city) {
        errors["city"] = "A cidade é obrigatória";
    }

    if(data.province) {
        errors["province"] = "A província é obrigatória";
    }


    return errors;
}
