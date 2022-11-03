var etapas =
    {
        etapa1:
        `
            topico:1 - Criar uma Database no SQL Server
            #*
            subtopico:Para o desenvolvimento de toda a aplicação precisaremos da criação
            de um banco de dados e a ferramento que iremos utilizar para essa tarefa
            será o SQL Server. 
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

       `
        
    }
