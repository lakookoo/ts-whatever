import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";


export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutoputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public target: OutoputTarget) {}

    static winsAnalisysHtmlReport(team: string): Summary {
        return  new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        );
    }

    buildAndPrintReport( matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.target.print(output);
    }
}

