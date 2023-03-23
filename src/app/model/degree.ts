export class Degree {
    id?: number;
    title: string;
    institution: string;
    startDate: string;
    endDate?: string;

    constructor(title: string, institution: string, startDate: string, endDate: string) {
        this.title = title
        this.institution = institution
        this.startDate = startDate
        this.endDate = endDate
    }
}
