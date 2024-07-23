import { create } from 'zustand';

interface Store {
  count: number;
  username: string;
  posts: [];
  increment: (value: number) => void;
  multiply: () => void;
  getPosts: () => Promise<void>;
  clearStore: () => void;
}

export const store = create<Store>((set, get) => ({
  count: 10,
  username: 'john',
  posts: [],
  increment: (value: number) => set( state => ({ count: state.count + value })),
  multiply: () => set(state => ({ count: state.count * state.count })),
  getPosts: async () => {
    const res = await (await fetch(`${process.env.USERS_LINK}`)).json();
    set(state => ({
      ...state,
      posts: res
    }))
  },
  clearStore: () => {
    set({}, true);
  }
}));