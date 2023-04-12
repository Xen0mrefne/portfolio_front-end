import { Tech } from "./tech";

export class Person {
    id:number;
    firstName:string;
    lastName:string;
    title:string;
    about:string;
    profileImageUrl:string;
    profileImageName:string;
    bannerImageUrl:string;
    bannerImageName:string;

    constructor (
        id:number,
        firstName:string,
        lastName:string,
        title:string,
        about:string,
        profileImageUrl:string,
        profileImageName:string,
        bannerImageUrl:string,
        bannerImageName:string
        ) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.about = about;
        this.profileImageUrl = profileImageUrl;
        this.profileImageName = profileImageName;
        this.bannerImageUrl = bannerImageUrl;
        this.bannerImageName = bannerImageName;
    }
}