'use client';
import { cn } from '@/shared/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

type RootProps = {
    children: ReactNode;
    className?: string;
};

function SideBar({ children, className }: RootProps) {
    const [collapsed, setCollapsed] = useState(false); // hide/show sidebar completely
    const [toggled, setToggled] = useState(false); // hide/show sidebar labels
    return (
        <motion.aside
            className={cn(
                `${toggled ? 'w-64 min-w-64' : 'w-20 min-w-20'}`,
                className,
            )}
        >
            <div className="relative z-10 h-full overflow-y-auto overflow-x-hidden">
                <button onClick={() => setToggled(!toggled)}>
                    {toggled ? <BsArrowBarRight /> : <BsArrowBarLeft />}
                </button>
                {children}
            </div>
        </motion.aside>
    );
}

export { SideBar };
