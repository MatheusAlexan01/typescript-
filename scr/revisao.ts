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
 




class DeveMaster extends Funcionario {


    constructor(
        nome: string,
        telefone: string,
        cpf: string,
        data_nascimento:Date,
        endereco: any[],
        genero: string,
        equipe: string,
        setor:string,
        cargo:string,
        public linguagem:string [],
        public framework:string

    ) {
        super(nome, telefone, cpf,data_nascimento,endereco,genero,equipe,setor,cargo)

    }

    mostrarLider() {
        console.log('DADOS DOS LIDERES')
        super.mostrarFuncionario()
        console.log(`LINGUAGEM ${this.linguagem}`)
        console.log(`FRAMEWORK ${this.framework}`)

    }
    


}

console.log('<======================================================================================>')
const lider1 = new DeveMaster ('Matheus','84988779900','000094586',new Date ('1987-9-8'),['Rua senac',333],'Masculino','A','TI','Analista sistemas',['Java','PHP'],'back-end')
lider1.mostrarLider()
const lider2 = new DeveMaster ('Tania','84988779900','000094586',new Date ('1977-9-8'),['Rua senac',660],'Feminino','A','TI','Dev Front',['CSS','HTML'],'Fron-end')
console.log('<-------------------------------------------------------------------------------->')
lider2.mostrarLider()







class Projeto {
    constructor(
        protected nome: string,
        public descricao: string,
        public tecnologia: string,
        public data_inicio: Date,
        public data_termino: Date,
        protected responsavel: DeveMaster,
        public status: boolean = true

    ) {
        
            

    }
    mostrarProjeto() {
        console.log('DADOS DO PROJETO')
        console.log(`NOME: ${this.nome}`)
        console.log(`DESCRIÇÃO: ${this.descricao}`)
        console.log(`TECNOLOGIA: ${this.tecnologia}`)
        console.log(`DATA INICIO: ${this.data_inicio.toLocaleDateString('pt-BR')}`)
        console.log(`DATA TERMINO: ${this.data_termino.toLocaleDateString('pt-BR')}`)
        console.log(`LIDER: ${lider1.getnome()}`)

    }
    mostrarstatus(){
        if(this.status){
            this.status = true
            console.log('Em Andamento')
            
        }else{
            console.log('Finalizado')
        }
}
        
}



console.log('<==================================================================================================================>')
const projeto1 = new Projeto('UniFarma', 'Fazer Atendimentos de clientes em nosso site', 'Java,SQL,HTML,CSS,TYPERSCRIT', new Date('2021-5-6'), new Date('2024-6-6'), lider1, true)
projeto1.mostrarProjeto(),projeto1.mostrarstatus()




class Equipe {
    constructor(
        private nome_equipe:string,
        private setor: string,
        protected componetes: number,
        protected tarefas: string,
        protected funcionario: Funcionario [],
        protected lider: DeveMaster

    ) {

    }
    mostrarEquipe(){
        console.log(`NOME DA EQUIPE:${this.nome_equipe}`)
        console.log(`SETOR: ${this.setor}`)
        console.log(`NUMERO TOTAL DE FUNCIONARIOS NA EQUIPE: ${this.componetes}`)
        console.log(`FUNCIONARIOS: ${funcionario2.getnome()}, ${funcionario3.getnome()}`)
        console.log(`LIDER: ${lider1.getnome()}`)
    }

    getnome_equipe():string{
        return this.nome_equipe
    }

}
console.log('<=============================================>')
const equipe1 = new Equipe ('A','TI',6,'PROGRAMAR',[funcionario2,funcionario3],lider1)
equipe1.mostrarEquipe()
console.log('<=============================================>')

class Tarefa {
    constructor(
        protected responsavel:DeveMaster,
        protected data_entrega:Date,
        protected destricao:string,
        protected componetes:number,
        protected equipe:Equipe,
        protected status:boolean = true,
    ){
        
    }
    
    mostrartarefa(){
        console.log('DADOS TAREFAS')
        console.log(`RESPONSAVEL:${lider1.getnome()}`)
        console.log(`DATA DE ENTREGA:${this.data_entrega.toLocaleDateString('pt-BR')}`)
        console.log(`DESTRIÇÃO:${this.destricao}`)
        console.log(`COMPONETES:${this.componetes}`)
        console.log(`EQUIPE:${equipe1.getnome_equipe()}`)

    }
    mostrarstatus(){
         if(this.status){
            this.status = true
                console.log('EM ANDAMENTO')
                
            }else{
                console.log('Finalizado')
            }
    
        }

    }

    const tarefas1 =  new Tarefa (lider2,new Date('2023-3-10'),'Manutenção semanal no banco de dados',3,equipe1,false)
    tarefas1.mostrartarefa(),tarefas1.mostrarstatus()