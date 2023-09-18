export class User{
    id?: String;
    username?: String;
    password?: String;
    createdAt?: String;
    status?: String;
    lastUpdate?: String;
}

export enum UserStatus {
    ATIVO = 'Ativo',
    INATIVO = 'Inativo',
}
