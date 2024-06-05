'use client';
import { Button } from '@/shared/ui/button';
import dynamic from 'next/dynamic';
import { HTMLAttributes, ReactNode } from 'react';
import * as SideBarPrimitive from 'react-pro-sidebar';
import { useSidebarStore } from '../lib/sidebar-store';
import { SideBarSkeleton } from './sidebarSkeleton';
import './styles.scss';

type RootProps = SideBarPrimitive.SidebarProps & {
    children: ReactNode;
    className?: string;
};

const SideBar = dynamic(() => import('./side-bar-root'), {
    ssr: false,
    loading: () => <SideBarSkeleton />,
});

function SideBarHeader({ children }: { children: ReactNode }) {
    return (
        <div className="flex bg-gradient-to-br from-primary to-secondary p-4">
            {children}
        </div>
    );
}
type NavBarTriggerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    icon?: ReactNode;
};
function SidebarTrigger({ children, icon, ...props }: NavBarTriggerProps) {
    const [collapse, collapsed] = useSidebarStore((state) => [
        state.collapse,
        state.isCollapsed,
    ]);
    return (
        <div
            className={`flex w-full items-center 
            ${!collapsed ? 'justify-between' : 'justify-center'}`}
            {...props}
        >
            {!collapsed && children}
            <Button
                onClick={() => collapse()}
                variant={'link'}
                className="hidden p-0 text-white md:block"
            >
                {icon}
            </Button>
        </div>
    );
}
function SidebarOuterTrigger({
    children,
    ...props
}: HTMLAttributes<HTMLButtonElement>) {
    const toggle = useSidebarStore((state) => state.toggle);
    return (
        <Button
            onClick={() => toggle()}
            className="trigger text-secondary"
            variant={'link'}
            {...props}
        >
            {children}
        </Button>
    );
}

type ContentProps = SideBarPrimitive.MenuProps & {
    children: ReactNode;
};
function SideBarContent({ children, ...props }: ContentProps) {
    return (
        <SideBarPrimitive.Menu className="content pt-4" {...props}>
            {children}
        </SideBarPrimitive.Menu>
    );
}

function SideBarFooter({ children }: RootProps) {
    return <div className="footer">{children}</div>;
}

type SideBarItemProps = SideBarPrimitive.MenuItemProps & {
    children: ReactNode;
};

function SideBarItem({ children, className, ...props }: SideBarItemProps) {
    const toogle = useSidebarStore((state) => state.toggle);
    return (
        <SideBarPrimitive.MenuItem
            {...props}
            className={`${className} text-sm font-medium`}
            onClick={() => toogle()}
        >
            {children}
        </SideBarPrimitive.MenuItem>
    );
}

export {
    SideBar,
    SideBarContent,
    SideBarFooter,
    SideBarHeader,
    SideBarItem,
    SidebarOuterTrigger,
    SidebarTrigger,
};
