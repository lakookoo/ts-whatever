import fs from 'fs';
import { OutoputTarget } from "../Summary";



export class HtmlReport implements OutoputTarget {
    print(report: string): void {
        const html = `
            <div>
                <h1> Analisis Output </h1>
                <div> ${report} </div>
            </div>
        `;

        fs.writeFileSync('report.thml', html);
    }
}