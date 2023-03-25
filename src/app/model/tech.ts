import { TechType } from "./techType";

export class Tech {
    id?: number;
    name: string;
    techType: TechType;

    constructor (name: string, techType: TechType) {
        this.name = name;
        this.techType = techType;
    }
}