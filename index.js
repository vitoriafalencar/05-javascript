
function exibir (){
    let data = document.getElementById("data").value ;
    data = new Date(data)
    console.log(data.getMonth())


    const resultado = document.getElementById("resultado")//02
 let day = data.getUTCDate()// dia formato numerico
 let Month = data.getUTCMonth()+1 //mes formato numerico
 let Year = data.getUTCFullYear()// ano formato numerico 
 
 
 let diaSemana //dia da semana portugues 
 switch (data.getUTCDay()) {
     case 0:
         diaSemana = "Domingo"
         break;
 
         case 1:
         diaSemana = "Segunda-feira"
         break;
 
         case 2:
            diaSemana = "Terça-feira"
            break;
    
            case 3:
                diaSemana = "Quarta-feira"
                break;
        
                case 4:
                    diaSemana = "Quinta-feira"
                    break;

                     case 5:
                        diaSemana = "Sexta-feira"
                        break;

                        case 6:
                        diaSemana = "Sábado"
                        break;
     default:
         break;
 }

 let mes//mes em portugues
 switch (Month) {
     case 1:
         mes = "Janeiro"
         break;
         case 2:

            mes = "fevereiro"
            break;
            case 3:

                mes = "Março"
                break;
                case 4:

                    mes = "Abril"
                    break;
                    case 5:

                     mes = "Maio"
                        break;
                        case 6:

                            mes = "Junho"
                        break;
                        case 7:

                            mes = "julho"
                            break;
                            case 8:

                                mes = "Agosto"
                                break;
                                case 9:

                                    mes = "Setembro"
                                    break;
                                    case 10:

                                        mes = "Outubro"
                                        break;
                                        case 11:

                                                mes = "Novembro"
                                                break;
                                                case 12:

                                                    mes = "Dezembro"
                                                    break;
                                                    
     default:
         break;
 }
 resultado.innerHTML = day+"<br/>"+Month+"<br/>"+Year+"<br/>"+diaSemana+"<br/>"+mes
}

var data = new Date();
console.log(data.getTime());   

//valor da adata em timestapm//

