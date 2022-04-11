export class MenuItem {
    id?: string;
    label?: string;
    icon?: string;
    link?: string;
    items?: MenuItem[];

    constructor(data: MenuItem) {
        this.id = data.id;
        this.label = data.label;
        this.icon = data.icon;
        this.link = data.link;
        this.items = data.items;
    }
}
