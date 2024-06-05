export function getStatusLabel(status: Projeto['status']) {
    switch (status) {
        case 'EM_ANDAMENTO':
            return 'Em andamento';
        case 'CANCELADO':
            return 'Cancelado';
        case 'CONCLUIDO':
            return 'Concluído';
        default:
            return '';
    }
}