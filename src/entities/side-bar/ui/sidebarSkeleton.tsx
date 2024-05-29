import { Skeleton } from '@/shared/ui/skeleton';

export function SideBarSkeleton() {
    return (
        <aside className="flex h-screen w-64 flex-col border-r-[.00625rem] border-input bg-primary-foreground">
            <Skeleton className="h-16 rounded-none" />
            <div className="flex flex-1 flex-col px-4 py-8">
                <div className="flex flex-col gap-4 ">
                    <Skeleton className="h-14" />
                    <Skeleton className="h-14" />
                    <Skeleton className="h-14" />
                    <Skeleton className="h-14" />
                </div>
                {/* footer wih a circle that represents the user */}
                <div className="flex h-full flex-col items-start justify-end">
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex flex-col justify-center gap-2">
                            <Skeleton className="h-3 w-32" />
                            <Skeleton className="h-2 w-16" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
