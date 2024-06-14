import { Button } from '@/shared/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { IonIcon } from '@/shared/ui/ion-icon';

export function MenuCard() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'link'} className="p-0">
                    <IonIcon
                        name="ellipsis-horizontal"
                        size="small"
                        className="text-muted-foreground"
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
