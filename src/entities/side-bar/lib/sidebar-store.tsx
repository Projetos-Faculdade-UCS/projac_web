import { create } from 'zustand';

type SidebarStore = {
    isToggled: boolean; // hide/show sidebar completely
    isCollapsed: boolean; // hide/show sidebar labels
    toggle: () => void;
    collapse: () => void;
    setToggled: (value: boolean) => void;
    setCollapsed: (value: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
    isToggled: false,
    isCollapsed: false,
    toggle: () =>
        set((state: SidebarStore) => ({ isToggled: !state.isToggled })),
    collapse: () =>
        set((state: SidebarStore) => ({ isCollapsed: !state.isCollapsed })),
    setToggled: (value: boolean) => set({ isToggled: value }),
    setCollapsed: (value: boolean) => set({ isCollapsed: value }),
}));
