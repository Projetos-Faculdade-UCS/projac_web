import { Control } from 'react-hook-form';
import { ProjetoSchema } from '../../lib/schema';

type ParticipantesProps = {
    control: Control<ProjetoSchema>;
};

export function Participantes({ control }: ParticipantesProps) {
    return (
        <div className="col-span-4 grid gap-4">
            <span className="text-lg font-medium">Participantes</span>
        </div>
    );
}
