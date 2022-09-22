interface UserNetworks {
    email: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string,
    whatsapp: string;
}

interface UserNetworksItem {
    title: string;
    link: string;
}

export type {UserNetworks, UserNetworksItem}