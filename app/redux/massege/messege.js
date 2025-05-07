import { create } from 'zustand';

const useMessageStore = create((set) => ({
  message: '',
  messageType: '', 
  setMessage: (message, type) => set({ message, messageType: type }),
}));

export default useMessageStore;
