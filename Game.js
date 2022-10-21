class Game {

    constructor(qlinhas, qcolunas) {
        this.qlinhas = qlinhas;
        this.qcolunas = qcolunas;
    }

    geraGrid() {

        var stringMalha = "";

        for (var i = 0; i < this.qlinhas; i++) {
            stringMalha += '\n<div class="linha" id="l' + i + '">\n';

            for (var j = 0; j < this.qcolunas; j++) {
                stringMalha +=
                    '\t<div class="coluna" id="c' + j + '">\n' +
                    '\t\t<input type="checkbox" id="i' + i + j + '">\n' +
                    '\t\t<label for="i' + i + j + '" id="lb' + i + j + '"></label>\n' +
                    '\t</div>\n'
            }

            stringMalha += '</div>';
        }

        $('#corpo-jogo').html(stringMalha);


    }

    geraBloco() {

    }

    resetarMalha() {
        for (var i = 0; i < this.qlinhas; i++) {
            for (var j = 0; j < this.qcolunas; j++) {
                $("#i" + i + j).prop("checked", false)
            }
        }
    }

}

var g;
var criado = false;

function definirMatrix() {
    var nlinhas = document.getElementById('nLinhas');
    var ncolunas = document.getElementById('ncolunas');
    g = new Game(nlinhas.value, ncolunas.value);
    g.geraGrid();
    criado = true;
}



function resetaGrid() {
    g.resetarMalha();
}

if (criado) 
{
    for (let i = 0; i < g.qlinhas; i++) 
    {
        for (let j = 0; j < g.qcolunas; j++)
        {
            $('#i' + i + j).on('click', () => {
                
                var ch = $('#i' + i + j)
                
                if (ch.is(':checked'))
                {
                    console.log('oi')
                    ch.prop('checked', true)
                } 
                else 
                {
                    ch.prop('checked', true)
                }
            
            });
        }
    }
}

