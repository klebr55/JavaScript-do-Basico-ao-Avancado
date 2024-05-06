/*
  Em JavaScript, existem diferentes tipos de caixas de diálogo que podem ser usadas para interagir com o usuário.
  
  1. Alert:
     A caixa de diálogo de alerta exibe uma mensagem para o usuário e geralmente é utilizada para fornecer informações importantes ou avisos.
     Exemplo: 
     alert("Esta é uma mensagem de alerta!");

  2. Prompt:
     O prompt é uma caixa de diálogo que permite ao usuário inserir um valor. É frequentemente usado quando se precisa receber entrada do usuário.
     Exemplo:
     var nome = prompt("Por favor, digite seu nome:");

  3. Confirm:
     A caixa de diálogo de confirmação exibe uma mensagem e permite que o usuário escolha entre "OK" ou "Cancelar". É útil para confirmar ações importantes.
     Exemplo:
     var confirmacao = confirm("Deseja realmente excluir este item?");
     if (confirmacao) {
       // Executa a ação de exclusão
     } else {
       // Cancela a ação
     }

  Além dessas, também existem outras formas de caixas de diálogo, como:
  
  4. Customização:
     Bibliotecas como SweetAlert2 permitem criar caixas de diálogo personalizadas com estilos e comportamentos específicos.

  5. HTML e CSS:
     Você pode criar suas próprias caixas de diálogo utilizando HTML e estilizando-as com CSS. Isso oferece total controle sobre a aparência e o comportamento.

  É importante considerar a experiência do usuário ao escolher o tipo de caixa de diálogo a ser utilizada, garantindo que seja clara e adequada para o contexto.
*/