export interface Person {
    id:number,
    fullName:string,
    title:string,
    about:string,
    techStack: {
        frontEnd:string[],
        backEnd:string[]
    }
}