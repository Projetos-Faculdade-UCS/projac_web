import { create } from 'zustand';

type SidebarStore = {
    isToggled: boolean; // hide/show sidebar labels
    isCollapsed: boolean; // hide/show sidebar completely
    toggle: () => void;
    collapse: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
    isToggled: false,
    isCollapsed: false,
    toggle: () =>
        set((state: SidebarStore) => ({ isToggled: !state.isToggled })),
    collapse: () =>
        set((state: SidebarStore) => ({ isCollapsed: !state.isCollapsed })),
}));
