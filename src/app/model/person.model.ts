export class Person {
    id?:number;
    firstName:string;
    lastName:string;
    title:string;
    about:string;
    techStacks: {
        frontEnd:string[],
        backEnd:string[]
    }

    constructor (firstName:string, lastName:string, title:string, about:string, techStacks: any ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.about = about;
        this.techStacks = techStacks;
    }
}