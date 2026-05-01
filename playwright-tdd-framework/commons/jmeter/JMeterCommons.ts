import { exec } from "child_process";
import { error } from "console";

export class JMeterCommons{

    //Common method to run from Command line
    private executeCommand(command: string) : Promise<string> {
            
            return new Promise((resolve,reject) => {
                //run the command
                //error - Command itself we have given wrong, stderror means command is executed whereas the server is down
                exec(command,(error,stdout,stderr)=>{
                    if(error){
                        reject(`Error execution command: ${command}, and error message: ${error.message}`);
                        return;
                    }
                    resolve(command+": Executed successfully");
                });
            });
    }

    //Common method to run JMeter test plan
    async runJmeterTestPlan(jmxFile:string): Promise<void>{
        
    }
}