//=====Rotina de Consulta em Tabela=====
$('#btn_buscar').click(function mostrar_tabela() {
    var Dados = $('#form_busca').serialize();
    $.ajax({
        method: "POST",
        url: 'consultar_alunos.php',
        data: Dados,
        beforeSend: function(){$('h2').html("Realizando consulta...");}
    })

    .done(function(msg){
            //Variável alunos pega resultado do JSON_encode (array) do arquivo consultar alunos.php
            var Alunos = JSON.parse(msg);

            var resultados_tabela = '';

            //loop permite exibir todos os resultados do array Alunos
            for(var i = 0; i < Alunos.length; i++)
            {
                
                resultados_tabela += "<tr>";
                resultados_tabela += "<td>" + Alunos[i].matricula + "</td>";
                resultados_tabela += "<td>" + Alunos[i].aluno + "</td>";
                resultados_tabela += "<td>" + Alunos[i].nota_01 + "</td>";
                resultados_tabela += "<td>" + Alunos[i].nota_02 + "</td>";
                resultados_tabela += "<td>" + "teste" + "</td>";
                resultados_tabela += "</tr>";
            }

            $('#table_body').append(resultados_tabela);
            alert("Consulta realizada com sucesso!");
            $('h2').html("");


    })
    .fail(function(){
        alert("Falha na consulta.");
        $('h2').html("");
    })          

    //return false impede que a página recarregue após o envio do formulário
    return false;
});
