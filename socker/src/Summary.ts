import { MatchData } from "./MatchData";


export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutoputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public target: OutoputTarget) {}

    buildAndPrintReport( matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.target.print(output);
    }
}

