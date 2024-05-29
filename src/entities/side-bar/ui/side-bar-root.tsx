import { cn } from '@/shared/lib/utils';
import { ReactNode } from 'react';
import * as SideBarPrimitive from 'react-pro-sidebar';
import { useSidebarStore } from '../lib/sidebar-store';
import './styles.scss';
type RootProps = SideBarPrimitive.SidebarProps & {
    children: ReactNode;
    className?: string;
};

export default function SideBar({ children, className, ...props }: RootProps) {
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
            {children}
        </SideBarPrimitive.Sidebar>
    );
}
