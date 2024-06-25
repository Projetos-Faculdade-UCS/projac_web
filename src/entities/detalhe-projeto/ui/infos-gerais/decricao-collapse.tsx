'use client';
import { Button } from '@/shared/ui/button';
import { TextWithLineBreaks } from '@/shared/ui/text-with-line-breaks';
import { useState } from 'react';
import styles from './descricao-collapse.module.scss';

type DescricaoCollapseProps = {
    descricao: string;
};

export function DescricaoCollapse({ descricao }: DescricaoCollapseProps) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const descGrande = descricao.length > 200;

    return (
        <div className="flex shrink flex-col">
            <div
                style={
                    isCollapsed
                        ? { WebkitLineClamp: '3' }
                        : { WebkitLineClamp: 'unset' }
                }
                className={`${styles.truncate} overflow-hidden`}
            >
                <TextWithLineBreaks text={descricao} />
            </div>
            {descGrande && (
                <Button
                    variant={'ghost'}
                    size={'sm'}
                    className="self-end text-xs font-semibold"
                    onClick={() => setIsCollapsed((state) => !state)}
                >
                    {isCollapsed ? 'Ver mais' : 'Ver menos'}
                </Button>
            )}
        </div>
    );
}
