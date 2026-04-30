import fs from 'fs';
import xlsx from 'xlsx';

export class ExcelUtil{

    static readExcel(filePath:string, sheetName: string) : any {

        //Verify whether the file exists
        if(!fs.existsSync(filePath)){
            throw new Error(`File not found at the location: ${filePath}`);
        }

        //Read the workbook from the file
        const workBook = xlsx.readFile(filePath);

        //Get specific sheet from workbook
        const sheet = workBook.Sheets[sheetName];

        //Verify whether sheet exists
        if(!sheet){
            throw new Error(`${sheet} => Sheeet not found in the workbook`)
        }

        //Read the data from the sheet and convert it into JSON format
        return xlsx.utils.sheet_to_json(sheet);

    }

}

let excel = ExcelUtil.readExcel("./files/Test Data.xlsx","Username");
console.log(excel);