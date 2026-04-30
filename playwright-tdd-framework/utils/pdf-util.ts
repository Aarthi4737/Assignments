import fs from 'fs';
import { PDFParse } from 'pdf-parse';


export class PDFUtil{

    static async readPDF(filepath:string) : Promise<string>{

        //Verify whether the file exists
            if(!fs.existsSync(filepath)){
                throw new Error(`File not found at the location: ${filepath}`);
            }

        //Read the PDF file and return its content as a string
        const buffer = fs.readFileSync(filepath);
        const uintBArray = new Uint8Array(buffer);
        const pdfData = new PDFParse(uintBArray);
        const data =  await pdfData.getText();
        return data.text;
    }

}

//Read the PDF file and print its content
let pdf = PDFUtil.readPDF("./files/Assignment 6.pdf");
pdf.then((content) => {
    console.log(content);
});