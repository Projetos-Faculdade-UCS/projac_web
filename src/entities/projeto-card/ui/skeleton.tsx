import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';

export function ProjetoCardSkeleton() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Skeleton className="mb-2 h-4 w-1/2 " />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="mb-2 h-4 w-1/3" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Skeleton className="mb-2 h-4 w-1/2" />
                <Skeleton className="mb-2 h-4 w-1/2" />
                <Skeleton className="mb-2 h-4 w-1/2" />
            </CardContent>
            <CardFooter>
                <Skeleton className="h-4 w-1/3" />
            </CardFooter>
        </Card>
    );
}
