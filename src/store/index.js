import { create } from 'zustand';
import createPostSlice from './post-slice';

const useStore = create((set, get) => ({
  postSlice: createPostSlice(set, get),
}));

export default useStore;
