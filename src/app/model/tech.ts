import { TechType } from "./techType";

export class Tech {
    id?: number;
    name: string;
    techType: TechType;
    personId: number;

    constructor (name: string, techType: TechType, personId: number) {
        this.name = name;
        this.techType = techType;
        this.personId = personId;
    }
}