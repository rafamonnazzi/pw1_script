function encontraMultiplo(lm,mt,mx){
    let multiplo=0
    let m= 0
    let c = 0
 
    while (m < lm){
        c++

        multiplo = Math.floor(Math.random()*mx)

        if (multiplo % mt == 0){
            m++;
            console.log(multiplo + " é multiplo de" + mt + ".") 
    }else{
        console.log("Foram " +c+" sorteios para encontrar" +lm+"multiplos de" +mt+"em uma faixa de no maximo de" +mx+".")
        
    }
    }
}
encontraMultiplo(3,100,7)

