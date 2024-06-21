import { Button } from '@/shared/ui/button';
import { useCarousel } from '@/shared/ui/carousel';
import { IonIcon } from '@/shared/ui/ion-icon';
import Link from 'next/link';

type StepperControlBarProps = {
    // TODO
};

export const StepperControlBar: React.FC<StepperControlBarProps> = () => {
    const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
        useCarousel();
    return (
        <div className="mt-4 flex w-full justify-between gap-4">
            <Button variant={'outline'}>
                <Link href="/projetos">Cancelar</Link>
            </Button>
            <div className="flex gap-4">
                <Button
                    type="button"
                    variant={'outline'}
                    className=" gap-2 border-primary px-3 text-primary"
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                >
                    <IonIcon name="arrow-back-outline" />
                </Button>
                <Button
                    type="button"
                    variant={'outline'}
                    className=" gap-2 border-primary px-3 text-primary"
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                >
                    <IonIcon name="arrow-forward-outline" />
                </Button>
                <Button
                    type="submit"
                    variant={'default'}
                    className=" gap-2 "
                    disabled={canScrollNext}
                >
                    <IonIcon name="save-outline" />
                    Salvar
                </Button>
            </div>
        </div>
    );
};
