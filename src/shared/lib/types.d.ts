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
        cor: string;
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
    cor: string;
}

type Pesquisador = {
    nome: string;
    cargo: string;
    horas: number;
    fotoPerfil: string;
}

type AgenciaFomento = {
    nome: string;
    sigla: string;
}

type ProjetoResumido = {
    id: number;
    titulo: string;
    objetivo: string;
    dataCriacao: string;
    status: Projeto['status'];
    area: {
        nome: string;
        cor: string;
    };
    coordenador: {
        id: number;
        nome: string;
        sobrenome: string;
        fotoPerfil: string;
    };

}
