export default interface IProject {
    name: string;
    description: string;
    image: string;
    preview?: string | undefined;
    repo?: string | undefined;
}