

export type User = {
    name?: string;
    email?: string;
    password?: string;
}

export type UserCheckout = {
    firstName?: string;
    lastName?: string;
    company?: string;
    zipCode?: string;
    country?: string;
    street?: string;
    city?: string;
    province?: string;
    onAdress?: string;
    emailAdress?: string
}

export type UserContact = {
    name?: string;
    email?: string;
}