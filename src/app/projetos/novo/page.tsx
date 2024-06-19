import { FormProjeto } from '@/features/form-projeto/ui';

export default function NovoProjeto() {
    return (
        <main className="flex w-full flex-col gap-6 overflow-y-scroll bg-background p-3 text-foreground md:px-10">
            <h1>Novo Projeto</h1>
            <FormProjeto />
        </main>
    );
}
