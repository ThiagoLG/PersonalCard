import { UserNetworks } from "./user-networks-item";

interface UserInfoItem {
    biography?: string;
    description?: string;
    name?: string;
    networks: UserNetworks;
    userPhoto?: string;
}

export type { UserInfoItem }