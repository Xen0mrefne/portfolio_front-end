export class Degree {
    id?: number;
    title: string;
    institution: string;
    finished: boolean;
    startDate: string;
    endDate?: string;
    personId: number;

    constructor(title: string, institution: string, finished: boolean, startDate: string, endDate: string, personId: number) {
        this.title = title
        this.institution = institution
        this.finished = finished
        this.startDate = startDate
        this.endDate = endDate
        this.personId = personId
    }
}
