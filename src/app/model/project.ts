export class Project {
    id?: number;
    name: string;
    description: string;
    dateCreated: string;
    url: string;

    constructor (name: string, description: string, dateCreated: string, url: string) {
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
        this.url = url;
    }
}