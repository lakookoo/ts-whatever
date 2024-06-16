import { OutoputTarget } from "../Summary";

export class ConsoleReport implements OutoputTarget {
    print(report: string): void {
        console.log(report);
    }
}