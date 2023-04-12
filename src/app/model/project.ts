export class Project {
    id?: number;
    name: string;
    description: string;
    url: string;
    personId: number;

    constructor (name: string, description: string, url: string, personId: number) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.personId = personId;
    }
}