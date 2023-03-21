export class Experience {
    id?:number;
    name:string;
    company:string;
    description:string;

    constructor (name:string, company:string, description:string) {
        this.name= name;
        this.company = company
        this.description = description;
    }

}
