import { Avatar } from "./avatar.model";

export class User {
    name?: string;
    surname?: string;
    companyTitle?: string;
    avatar?: Avatar;

    constructor(data: User) {
        this.name = data.name;
        this.surname = data.surname;
        this.companyTitle = data.companyTitle;
        this.avatar = data.avatar;
    }
}
