import { Tech } from "./tech";

export class Person {
    id?:number;
    firstName:string;
    lastName:string;
    title:string;
    about:string;
    profileImage:string;
    bannerImage:string;

    constructor (firstName:string, lastName:string, title:string, about:string, profileImage:string, bannerImage:string ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.about = about;
        this.profileImage = profileImage;
        this.bannerImage = bannerImage;
    }
}