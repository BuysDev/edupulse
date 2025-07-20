type Sidebar = {
    isOpen: boolean;
    toggle: () => void;
}

import { create } from 'zustand';

export const useSidebarStore = create<Sidebar>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));