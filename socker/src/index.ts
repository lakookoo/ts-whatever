import { MatchReader } from "./MatchReader";
import { CsvReader } from "./CsvReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";


const csvReader = new CsvReader('football.csv');
const matcReader = new MatchReader(csvReader);
matcReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

summary.buildAndPrintReport(matcReader.matches);
