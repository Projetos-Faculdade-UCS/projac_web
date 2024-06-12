import { Button } from '@/shared/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { IonIcon } from '@/shared/ui/ion-icon';

export function CardMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'link'}
                    className="absolute bottom-0 right-3 p-0"
                >
                    <IonIcon
                        name="ellipsis-horizontal"
                        size="small"
                        className="text-muted"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Denunciar</DropdownMenuItem>
                <DropdownMenuItem>Excluir</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
