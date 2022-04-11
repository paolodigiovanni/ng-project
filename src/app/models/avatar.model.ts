export class Avatar {
    imgUrl?: string;
    bgUrl?: string;

    constructor(data: Avatar) {
        this.imgUrl = data.imgUrl;
        this.bgUrl = data.bgUrl;
    }
}
