export class Experience {
    id?:number;
    name:string;
    company:string;
    description:string;
    personId: number;

    constructor (name:string, company:string, description:string, personId: number) {
        this.name= name;
        this.company = company
        this.description = description;
        this.personId = personId
    }

}
