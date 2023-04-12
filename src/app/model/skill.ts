export class Skill {
    id?: number;
    name: string;
    percent: number;
    personId: number;

    constructor (name: string, percent: number, personId: number) {
        this.name = name;
        this.percent = percent;
        this.personId = personId;
    }
}