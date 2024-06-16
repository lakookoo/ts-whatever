import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";


const matcReader = MatchReader.fromCsv('football.csv');
matcReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

const summary1 = Summary.winsAnalisysHtmlReport('Man United');

summary.buildAndPrintReport(matcReader.matches);
summary1.buildAndPrintReport(matcReader.matches);
