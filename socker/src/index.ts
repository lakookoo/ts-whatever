import { MatchReader } from "./MatchReader";
import { CsvReader } from "./CsvReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";


const csvReader = new CsvReader('football.csv');
const matcReader = new MatchReader(csvReader);
matcReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

const summary1 = new Summary(
    new WinsAnalysis('Man United'),
    new HtmlReport()
);

summary.buildAndPrintReport(matcReader.matches);
summary1.buildAndPrintReport(matcReader.matches);
