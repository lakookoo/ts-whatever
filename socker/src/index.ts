import { MatchReader } from "./MatchReader";
import { CsvReader } from "./CsvReader";
import { MatchResult } from "./MatchResult";

const csvReader = new CsvReader('football.csv');
const matcReader = new MatchReader(csvReader);

matcReader.load();

let manUnitedWins = 0;

for(let match of matcReader.matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);