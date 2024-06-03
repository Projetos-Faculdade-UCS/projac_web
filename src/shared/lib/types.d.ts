type Projeto = {
    id: number;
    titulo: string;
    objetivo: string;
    descricao: string;
    status: 'EM_ANDAMENTO' | 'CANCELADO' | 'CONCLUIDO';
    dataCriacao: string;
    dataConclusao: string | null;
    valorSolicitado: number;
    valorTotalArrecadado: number;
    area: {
        nome: string;
        color: string;
    };
    producoesAcademicas: ProducaoAcademica[];
    valoresArrecadados: ValorArrecadado[];
    subareas: Subarea[];
    pesquisadores: Pesquisador[];
    agenciasFomento: AgenciaFomento[];
}

type ProducaoAcademica = {
    id: number;
    titulo: string;
    tipo: string;
    descricao: string;
}

type ValorArrecadado = {
    id: number;
    valor: number;
    data: string;
}

type Subarea = {
    id: number;
    nome: string;
    color: string;
}

type Pesquisador = {
    nome: string;
    cargo: string;
    horas: number;
}

type AgenciaFomento = {
    nome: string;
    sigla: string;
}

// type ProjetoList = {
//     id: number;
//     titulo: string;
//     objetivo: string;
//     dataCriacao: string;
//     descricao: string;
//     valorSolicitado: number;
//     dataConclusao: string | null;
//     status: string;
//     valorTotalArrecadado: number;
//     area: {
//         nome: string;
//         color: string;
//     };
// }
