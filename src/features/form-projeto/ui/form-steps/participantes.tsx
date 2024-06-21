import { Control } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';

type ParticipantesProps = {
    control: Control<ProjetoSchema>;
};

export function Participantes({ control }: ParticipantesProps) {
    return (
        <div className="grid h-full grid-flow-row-dense grid-cols-1 gap-x-4 gap-y-8 bg-red-400 md:grid-cols-4 xl:grid-cols-12">
            <span className="text-lg font-medium">Participantes</span>
        </div>
    );
}
