Documentação
Classes:
Pessoa:
Atributos: nome, telefone, cpf, data de nascimento, gênero e endereço.
Essa classe é uma classe Abstract serve de modelo para funcionário também é classe Pai.

Funcionário:
Atributos: equipe, setor, cargo (tem ainda os atributos de pessoas).
Essa classe é filha e pai ao mesmo tempo filha de Pessoa e mãe de outros tipos de funcionários.

DeveMaster:
Atributos: Linguagem e framework.
Classe filha de Funcionários. 

Projeto:
Atributos: nome, responsável, tecnologia, data de início, data de entrega e status.

Equipe:
Atributos: nome da equipe, setor, número de componentes, funcionários, líder.

Tarefas:
Atributos: Responsável, data de entrega, descrição, componentes, equipe responsável pela tarefa, status.






Decisões 

Essas classes foram criadas com base na atividade passada pelo professor. Identifiquei aquelas que julgo serem as mais importantes e os tipos de dados utilizados para suas características foram String, Number, Boolean, any [], Date e citações. 
Fiz de tudo para não incluir a classe Pessoa, porque já a havia utilizado em outra atividade, mas vi que era necessário, pois queria colocar uma classe abstrata. 
Projeto e Tarefas poderiam ser classes mãe e filha, mas eu não queria que o console ficasse longo com aquele monte de dados repetidos. Foi aí que decidi usar as citações. Usei encapsulamento em alguns atributos que achei necessário.

O poderia ser mudado?

Acredito que alguns refinamentos em algumas classes e a criação de uma ou duas no máximo seria bom, mas não necessário (minha opinião). Fazer outra classe mãe de Projeto para Tarefas também seria uma boa. Entretanto, usar mais funções como push e add também seria um bom acréscimo (não utilizei porque não tenho muito conhecimento delas).
