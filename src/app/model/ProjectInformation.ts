
export default interface Project {
    name: string;
    description: string;
    deadline: number;
    stack?: string[];
    functionalRequirements?: string[];
    otherRequirements?: string[];
    designSpecs?: string[];
    additionalInformation?: string[];
}