
const fs = require('fs');
//const { colors } = require("./config/colors");
const colors = require('colors');


const crearArchivo = async( num1 = 5, listar = false, hasta = 10) =>{

    try {

        let result='';
        let log= '';

        
        for (let i = 1; i <= hasta; i++) {
            //console.log(`${num1} * ${i} = ${result = num1*i }`);
            result += `${num1} * ${i} = ${ num1*i }\n`
            log += `${num1} ${colors.blue(`*`)} ${i} ${colors.cyan(`=`)} ${ colors.brightMagenta(num1*i) }\n`
        }
        if (listar) {
            console.log(colors.red(`TABLA DEL`, num1));
            
            console.log(log);
        }
    
    
        //TODO: fs.writeFile
        /*
        fs.writeFile(`tabla del ${num1}.txt`, result, (error) =>{
            if (error) throw error;
    
            console.log(`tabla del ${num1} se Creo Exitosamente!!`);
        } ) */
    
        //TODO: fs.writeFileSync
    
        fs.writeFileSync(`./salida/tabla del ${num1}.txt`, result ) ;
    
        //console.log(` tabla del ${num1}.txt creada con exito!! `);
        return `\n tabla del ${num1}.txt creada con exito!! `;
    
    } catch (error) {
        throw error
    }
    
   
}

module.exports= {
    crearArchivo
}