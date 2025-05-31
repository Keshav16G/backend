import { defineStore } from 'pinia';
import api from '../api';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null }),
  actions: {
    async login(email, password) {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      this.user = email;
      router.push('/dashboard');
    },
    logout() {
      localStorage.removeItem('token');
      this.user = null;
      router.push('/login');
    }
  }
});