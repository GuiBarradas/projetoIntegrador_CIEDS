var etapas =
    {
        etapa1:
        `
            topico:1 - Criar uma Database no SQL Server
            #*
            subtopico:Para o desenvolvimento de toda a aplicação precisaremos da criação de um banco de dados e a ferramento que iremos utilizar para essa tarefa será o SQL Server. 
            #*
            video:https://www.youtube.com/embed/4TfJQussrvs
            #*
            subtopico:Após o vídeo ser assistido, crie uma tabela na Database feita anteriormente com as seguintes colunas:
            lista:Código(PK - “chave primária")%Nome%Ativo%CPF%Data de nascimento
            #*
            Obs: (Os campos não devem possuir acentos ou espaçamentos no SQL Server e nem nas variáveis usadas no sistema)
            #*
            topico:2 - Desenvolver o Protótipo na Tela
            #*
            subtopico:Fazer o protótipo na tela com os mesmos campos criados na tabela do SQL Server
            <br>
            CPF e Data nascimento devem ter suas respectivas máscaras de campos para 
            facilitar o preenchimento e evitar erros.
            #*
            imagem:assets/etapa1.png
        `,

        etapa2:
        `
        topico:1 - Criar tela de Filtro e função de Cadastro de Dados:
        #*
        subtopico: Criar uma 'procedure' para armazenar os dados da 1º etapa no banco de dados pela tela do formulário.
        #*
        video:https://www.youtube.com/embed/1SOk2p1peLo
        #*
        subtopico:
        Obs: Há um modelo de procedure que segue o padrão da empresa disponibilizado em nosso servidor do Discord na aba "exemplos-iniciais"
        #*
        topico:2 - Filtrar os dados e exclusão lógica
        #*
        subtopico:A tela também deverá ser capaz de recuperar todos os dados anteriormente gravados e excluir-los logicamente (Inativar o registro).
        #*
        topico:3 - Construir tela individual para o filtro
        #*
        subtopico:Construir uma tela de filtro apresentando: 
        lista:Nome %Data de Nascimento %Ativo %CPF
        <br><br>
        (Na tela de filtro deverá ser possível pesquisar por nome, ativo, CPF e data de nascimento).
        #*
        imagem:assets/etapa2.png
    `,
       etapa3:
       `
       topico:1 - Formatando os campos do Formulário:
       #*
       subtopico: Impedir que os seguintes campos sejam gravados sem o devido preenchimento: 
       lista:Nome %CPF %Data de Nascimento. <br><br>
       Os campos devem ficar na cor amarela para indicar que são campos obrigatórios utilizando a classe <mark>required</mark>.
       #*
       video:https://www.youtube.com/embed/uvzFT-TCVFM
       #*
       topico:2 - Apresentar a idade do funcionário de acordo com a data de nascimento
       #*
       subtopico: O campo idade deverá ficar na cor cinza indicando que está bloqueado, usando <mark>readonly</mark> como classe e atributo.
       #*
       topico:3 - Validar a data de nascimento do funcionário
       #*
       subtopico: Não permitir que seja informado uma data futura ou inexistente como: "27/10/2077" ou "99/99/1234".
       <br>
       #*
       topico:4 - Validar o CPF
       #*
       subtopico: Aceitar apenas CPFs válidos e verificar se o mesmo já foi registrado previamente em nosso sistema.<br>
       Não permitir 2 funcionários distintos com o mesmo CPF.
       #*
       imagem:assets/etapa3.png

       `,

       etapa4:
       `
       topico:1 - Adicionando novos campos:
       #*
       subtopico: Incluir no cadastro do funcionário o RG (Com máscara e validação) e o sexo cadastrado em uma tabela <mark><b>SEPARADA</b></mark> no banco de dados como <a href="https://www.devmedia.com.br/breve-conceito-de-foreign-key/17426"><b>FK (Chave Estrangeira)</b></a>.
       #*
       video:https://www.youtube.com/embed/l7h1YmgXXgw
       #*
       topico:2 - Criação do campo "Estado Civil"
       #*
       subtopico: O campo deverá ser uma <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select"> <b>Combo Box</b> </a>.
       #*
       topico:3 - Criar parâmetros de filtragem
       #*
       subtopico: No filtro de cadastro criar parâmetro a partir de Data de Nascimento <b>inicial</b> e <b>final</b>.
       <br>
       #*
       imagem:assets/etapa4.png
    
       `,

       etapa5:
       `
       topico:1 - Criar um accordion para contato
       #*
       subtopico: Dentro deste novo <a href="https://learn.microsoft.com/en-us/fluent-ui/web-components/components/accordion">accordion</a> terão duas listas: Uma para telefone e outra para email.
       #*
       video:https://www.youtube.com/embed/A5TdJZhkd30
       #*
       topico:2 - Formatação da lista:
       #*
       subtopico: Deverá ser possível adicionar e remover itens os na lista e, ao clicar nos hiperlinks da lista, os dados
       deverão voltar aos seus respectivos campos para que possíveis alterações possam ser realizadas.
       #*
       topico:3 - Tabela FK (Foreign Key - Chave Estrangeira)
       #*
       subtopico: Quando gravar, a tela deverá salvar todos os itens (Caso existam) na lista em uma tabela filha, referenciando a tabela pai e
       vincular-la como <a href="https://www.w3schools.com/sql/sql_foreignkey.asp">FK (Foreign Key)</a> e, ao recuperar, todos os dados da lista devem ser
       preenchidos.
       #*
       topico:4 - Validação
       #*
       subtopico: Validar os itens em ambas as listas, não permitindo 2
       telefones ou emails iguais, também não permitir 2 itens principais
       na lista. Ex: 2 telefones principais.
       #*
       imagem:assets/etapa5.png
    
       `,
       
       etapa6:
       `
       topico:1 - Criar um novo accordion para endereço
       #*
       subtopico: Deverá ter os seguintes campos: 
       lista: CEP %Logradouro %Número %Complemento %UF %Bairro
       %Cidade<br><br>
       <b>OBS</b>: Gravar e recuperar esses campos (Na mesma tabela)</i>
       #*
       topico:2 - CEP API
       #*
       subtopico: Implementar funcionalidade de busca por CEP, preenchendo todos os dados do endereço de forma automática, através do consumo de uma <a href="https://www.techtudo.com.br/listas/2020/06/o-que-e-api-e-para-que-serve-cinco-perguntas-e-respostas.ghtml"><b>API</b></a>
       #*
       topico:3 - Criar uma nova tela de "Tipo de Dependente"
       #*
       subtopico: Criar uma nova tela <mark><b>SEPARADA</b></mark> incluindo os seguintes campos:
       lista: Código %Descrição %Ativo
       <br><br>
       <b>OBS</b>: Adicionar todas as funcionalidades previamente utilizadas (Gravar, excluir e recuperar).
       #*
       topico:4 - Fazer o filtro para Dependentes
       #*
       subtopico: Deverá ser possível pesquisar por ativo e descrição
       #*
       topico:5 - Novos campos:
       #*
       subtopico: Criar os respectivos campos:
       lista: Primeiro emprego %PisPasep
       <br><br>
       <b>OBS</b>: O Campo "Primeiro Emprego" é obrigatório e, caso seja o primeiro emprego do candidato, não será necessário informar o "PisPasep", apagando quaisquer valores existentes nesse campo e desabilitando o mesmo (Readonly) e ao recuperar o cadastro, o sistema também deverá <b>bloquear</b> ou <b>liberar</b> os campos.
       #*
       imagem:assets/etapa6.png
    
       `,

       etapa7:
       `
       topico:1 - Montar um menu lateral por telas 
       #*
       subtopico: Cada tela deverá
       pertencer ao seu menu e todos os itens da tela devem ser coerentes ao seu menu lateral (<b>config.ui.php</b>)
       #*
       topico:2 - Referenciação 
       #*
       subtopico: Na parte superior da página também precisará
       estar referenciado, de forma correta, de acordo com o menu. (<b>Breadcrumbs</b>)
       #*
       topico:3 - Ponteiro
       #*
       subtopico: Adicionar um ponteiro no menu lateral mostrando ao usuário qual página ele <b>atualmente</b> está
       <br><br>
       <b>OBS</b>: Essas configurações precisam ser feitas em <mark><b>TODAS</b></mark> as telas.
       #*
       imagem:assets/etapa7.png
    
       `,
        
       etapa8:
       `
       topico:1 - Criar novo accordion para dependentes
       #*
       subtopico:  Na tela de cadastro de funcionário criar um novo accordion para dependentes, contendo uma lista grande com os seguintes campos:
       lista: Nome %CPF %Data de Nascimento %Tipo Dependente (Da tela cadastrada anteriormente como <b>FK</b>)
       #*
       topico:2 - Validação
       #*
       subtopico: É necessário validar a lista, adicionar e realizar todos os processos feitos nas listas anteriores e também é preciso ver se o CPF do dependente é válido
       #*
       topico:3 - Validação - Tabelas Básicas
       #*
       subtopico: Nas tabelas básicas de <b>Sexo</b> e <b>Tipo Dependente</b> verificar se foi feita uma validação para impedir cadastrar dois nomes iguais para não haver duplicidade.
       #*
       imagem: assets/etapa8.png

       `,

       etapa9:
       `
       topico:1 - PDF - Relatório Geral de Funcionários
       #*
       subtopico: No filtro de candidatos, criar um relatório geral de funcionários ativos utilizando a classe "<mark><b>FPDF</mark></b>" do PHP.
       #*
       video:https://youtu.be/embed/aLIz_qgk5z4
       #*
       topico:2 - Filtragem
       #*
       subtopico: A opção de filtragem poderá ser feita a partir do sexo ou estado civil; O objetivo do relatório é usar os dados do sistema para gerar alguma informação útil.
       #*
       topico:3 - Informações adicionais
       #*
       subtopico: O relatório deverá ser feito em PDF à partir dos exemplos que serão informados no Discord. Porém, cada um poderá usar a sua criatividade para preencher da melhor forma possível o PDF.
       <br><br>
       Segue um exemplo de um dos PDFs feitos pelos nossos aprendizes: <a href="https://i.imgur.com/u0mIPpz.png"><b>Clique Aqui</b></a>
       #*
       `,

       etapa10:
       `
       topico:1 - PDF - Relatório Individual 
       #*
       subtopico: Criar um relatório individual para cada funcionário cadastrado
       #*
       topico:2 - Criação do botão "Relatório Contato"
       #*
       subtopico: Na aba de contato criar um botão que só deverá aparecer ao recuperar a tela de cadastro de funcionários
       #*
       topico:3 - Formatação da Tela
       #*
       subtopico: O primeiro botão deverá ficar localizado no footer da página, com o nome “Relatório Contato" e, ao clicar no botão, será gerado um relatório de dados de contato, com cabeçalho e trazendo às listas de contato do usuário apresentado na tela.
       <br><br>
       Segue um exemplo de um dos PDFs feitos pelos nossos aprendizes: <a href="https://i.imgur.com/LQanPS9.png"><b>Clique Aqui</b></a>
       
       `
    }
