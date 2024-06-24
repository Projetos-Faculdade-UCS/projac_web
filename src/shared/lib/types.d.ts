export type Projeto = {
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
    pesquisadores: PesquisadorProjeto[];
    agenciasFomento: AgenciaFomento[];
}

export type ProducaoAcademica = {
    id: number;
    titulo: string;
    tipo: string;
    descricao: string;
}

export type Area = {
    id: number;
    nome: string;
    cor: string;
    // subareas: Subarea[];
}

export type ValorArrecadado = {
    id: number;
    valor: number;
    data: string;
    descricao: string;
}

export type Subarea = {
    id: number;
    nome: string;
    cor: string;
}

export type PesquisadorProjeto = {
    id: number;
    nome: string;
    sobrenome: string;
    cargo: string;
    horas: number;
    fotoPerfil: string;
}

export type Pesquisador = {
    id: number;
    nome: string;
    sobrenome: string;
    fotoPerfil: string;
    numeroProjetos: number;
    numeroProducoes: number;
}

export type AgenciaFomento = {
    nome: string;
    sigla: string;
}

export type ProjetoResumido = {
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
