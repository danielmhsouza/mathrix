class Game{
    
    geraGrid(qlinhas, qcolunas){
        
        var stringMalha = "";

        for(var i = 0; i < qlinhas; i++)
        {
            stringMalha += '\n<div class="linha" id="l'+i+'">\n';
        
            for(var j = 0; j < qcolunas; j++)
            {
                stringMalha +=
                '\t<div class="coluna" id="c'+j+'">\n'+
                '\t\t<input type="checkbox" id="i'+i+j+'">\n'+
                '\t\t<label for="i'+i+j+'"></label>\n'+
                '\t</div>\n'
            }
                
            stringMalha += '</div>';
       }

       console.log(stringMalha)
       $('#corpo-jogo').html(stringMalha);

        
    }
    
    geraBloco(){

    }

    resetarMalha(qlinhas, qcolunas){
        for(var i = 0; i < qlinhas; i++)
        {
            for(var j = 0; j < qcolunas; j++)
            {

            }
        }
    }
    
}

let g = new Game();

g.geraGrid(7, 6);