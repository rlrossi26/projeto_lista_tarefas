$(document).ready(function() {

    tarefas = [];
    
    $('form').submit(function(e) {
        const nomeTarefa = $('#nome-tarefa').val();

        e.preventDefault();
        addTarefa(nomeTarefa);
        concluiTarefa();
    });


    function addTarefa(nomeTarefa) {
        if (tarefas.includes(nomeTarefa)) {
            alert(`A terafa ${nomeTarefa} já foi cadastrada`);
        } else {
            tarefas.push(nomeTarefa);
            const novaLinha = $('<li></li>');

            $(`<input type="checkbox" id="${nomeTarefa}"> `).appendTo(novaLinha);
            $(`<label for="${nomeTarefa}"> ${nomeTarefa}</label>`).appendTo(novaLinha);
            $(novaLinha).appendTo('ul');
        };

        $('#nome-tarefa').val('');
    };

    function concluiTarefa() {
        $('input[type="checkbox"]').change(function() {
            const label = $(this).siblings('label');
            label.toggleClass('riscado', $(this).is(':checked'));
        });
    };

});