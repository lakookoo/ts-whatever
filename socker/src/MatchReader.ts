import { dateStringtoDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvReader } from './CsvReader';

interface DataReader {
    read(): void;
    data: string[][];
}



export class MatchReader {

    matches: MatchData[] = [];
    constructor(public reader: DataReader) { }

    static fromCsv(filename: string): MatchReader{
        return new MatchReader(new CsvReader(filename));
    }

    load(): void {
        this.reader.read();
        this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringtoDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            })
    }


}