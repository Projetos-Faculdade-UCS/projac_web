'use client';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { HTMLAttributes, ReactNode } from 'react';
import * as SideBarPrimitive from 'react-pro-sidebar';
import { useSidebarStore } from '../lib/sidebar-store';
import './styles.scss';

type RootProps = SideBarPrimitive.SidebarProps & {
    children: ReactNode;
    className?: string;
};

function SideBar({ children, className, ...props }: RootProps) {
    const [toggled, collapsed, setToggled, setCollapsed] = useSidebarStore(
        (state) => [
            state.isToggled,
            state.isCollapsed,
            state.setToggled,
            state.setCollapsed,
        ],
    );
    return (
        <SideBarPrimitive.Sidebar
            toggled={toggled}
            collapsed={collapsed}
            breakPoint="md"
            onBreakPoint={() => {
                setCollapsed(false);
                setToggled(false);
            }}
            onBackdropClick={() => setToggled(false)}
            className={cn('root', className)}
            {...props}
        >
            {toggled}
            {children}
        </SideBarPrimitive.Sidebar>
    );
}

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
    return (
        <SideBarPrimitive.MenuItem
            {...props}
            className={`${className} text-sm font-medium`}
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
