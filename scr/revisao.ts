 abstract class Pessoa {

    constructor(
        private nome: string,
        protected telefone: string,
        protected cpf: string,
        protected data_nascimento:Date,
        protected endereco: any[],
        public genero: string


    ) {}
 
    getnome():string{
        return this.nome
    }
  }


















class Funcionario  extends Pessoa{


    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento:Date,
        endereco: any[],
        genero: string,
        public equipe: string,
        public setor:string,
        public cargo:string
       


    ) {super(nome,telefone,cpf,data_nascimento,endereco,genero) }


    mostrarFuncionario() {
        console.log('DADOS DO FUNCIONARIO')
        console.log(`NOME: ${this.getnome()}`)
        console.log(`TELEFONE: ${this.telefone}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`DATA NASCIMENTO: ${this.data_nascimento.toLocaleDateString('pt-BR')}`)
        console.log(`ENDEREÇO: ${this.endereco}`)
        console.log(`GENERO: ${this.genero}`)
        console.log(`EQUIPE: ${this.equipe}`)
        console.log(`SETOR: ${this.setor}`)
        console.log(`EQUIPE: ${this.cargo}`)

    }


}



const funcionario2 = new Funcionario ('Valtemir','84988779900','000094586',new Date ('1987-9-8'),['Rua senac',333],'Masculino','A','TI','Analista sistemas')
const funcionario3 = new Funcionario ('Susan','84988779900','000094586',new Date ('1977-9-8'),['Rua senac',660],'Feminino','A','TI','Dev Front')
funcionario2.mostrarFuncionario()
console.log('<-------------------------------------------------------------------------------->')
funcionario3.mostrarFuncionario()
 




class Lider extends Funcionario {


    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento:Date,
        endereco: any[],
        genero: string,
         equipe: string,
         setor:string,
         cargo:string

    ) {
        super(nome, telefone, cpf,data_nascimento,endereco,genero,equipe,setor,cargo)

    }

    mostrarLider() {
        console.log('DADOS DOS LIDERES')
        super.mostrarFuncionario()
        

    }

}

console.log('<======================================================================================>')
const lider1 = new Lider ('Matheus','84988779900','000094586',new Date ('1987-9-8'),['Rua senac',333],'Masculino','A','TI','Analista sistemas')
lider1.mostrarLider()
const lider2 = new Lider ('Tania','84988779900','000094586',new Date ('1977-9-8'),['Rua senac',660],'Feminino','A','TI','Dev Front')
console.log('<-------------------------------------------------------------------------------->')
lider2.mostrarLider()







class Projeto {
    constructor(
        protected nome: string,
        public descricao: string,
        public tecnologia: string,
        public data_inicio: Date,
        public data_termino: Date,
        public status: string,
        protected responsavel: Lider


    ) {

    }
    mostrarProjeto() {
        console.log('DADOS DO PROJETO')
        console.log(`NOME: ${this.nome}`)
        console.log(`DESCRIÇÃO: ${this.descricao}`)
        console.log(`TECNOLOGIA: ${this.tecnologia}`)
        console.log(`DATA INICIO: ${this.data_inicio.toLocaleDateString('pt-BR')}`)
        console.log(`DATA TERMINO: ${this.data_termino.toLocaleDateString('pt-BR')}`)
        console.log(`STATUS: ${this.status}`)
        console.log(`LIDER: ${lider1.getnome()}`)

    }


}


console.log('<==================================================================================================================>')
const projeto1 = new Projeto('UniFarma', 'Fazer Atendimentos de clientes em nosso site', 'Java,SQL,HTML,CSS,TYPERSCRIT', new Date('2021-5-6'), new Date('2024-6-6'), 'Em andamento', lider1)
projeto1.mostrarProjeto()




class Equipe {
    constructor(
        private nome:string,
        private setor: string,
        protected componetes: number,
        protected tarefas: string,
        protected funcionario: Funcionario [],
        protected lider: Lider

    ) {

    }
    mostrarEquipe(){
        console.log(`NOME DA EQUIPE:${this.nome}`)
        console.log(`SETOR: ${this.setor}`)
        console.log(`NUMERO TOTAL DE FUNCIONARIOS NA EQUIPE: ${this.componetes}`)
        console.log(`FUNCIONARIOS: ${funcionario2.getnome()}, ${funcionario3.getnome()}`)
        console.log(`LIDER: ${lider1.getnome()}`)
    }

}
console.log('<=============================================>')
const equipe1 = new Equipe ('A','TI',6,'PROGRAMAR',[funcionario2,funcionario3],lider1)
equipe1.mostrarEquipe()


class Tarefas {
    constructor(
        public responsavel:Lider,
        public data_entrega:Date,
        public destricao:string,
        public componetes:number,
        public status:string
    ){


    }

}