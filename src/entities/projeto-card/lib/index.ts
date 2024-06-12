import { Projeto } from '@/shared/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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

export function getIconName(status: Projeto['status']) {
    switch (status) {
        case 'EM_ANDAMENTO':
            return 'construct';
        case 'CANCELADO':
            return 'close';
        case 'CONCLUIDO':
            return 'checkmark-done-sharp';
        default:
            return '';
    }
}

export function getStatusHexColor(status: Projeto['status']) {
    switch (status) {
        case 'EM_ANDAMENTO':
            return '#FF9800';
        case 'CANCELADO':
            return '#F44336';
        case 'CONCLUIDO':
            return '#3d8d40';
        default:
            return '';
    }
}


export const formatDateToTimeAgo = (dateString: Projeto['dataCriacao']) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
};
