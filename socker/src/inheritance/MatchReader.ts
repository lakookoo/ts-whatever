import { CsvReader } from "./CsvReader";
import { MatchResult } from "./MatchResult";
import { dateStringtoDate } from "./utils";

type MatchData = [
    Date,
    string,
    string,
    number,
    number,
    MatchResult,
    string
];

export class MatchReader extends CsvReader<MatchData>{
    mapRow(row: string[]): MatchData {
        return [
            dateStringtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ];
    }
}