import { acceptHMRUpdate, defineStore } from 'pinia'

interface I_User {
  id: Number
  documentId: String
  username: String
  email: String
  provider: String
  confirmed: Boolean
  blocked: Boolean
  createdAt: String
  updatedAt: String
  publishedAt: String
  locale: String
}

interface TableState<T> {
  user: T
}

const defaultUser: I_User = {
  id: 0,
  documentId: '',
  username: '',
  email: '',
  provider: '',
  confirmed: false,
  blocked: false,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  locale: '',
}

export const useAuthStore = defineStore({
  id: 'authStore',

  state: (): TableState<I_User> => ({
    user: defaultUser,
  }),
  actions: {
    fetchUser() {
      const userString = localStorage.getItem("user");
      if (userString) {
        this.user = JSON.parse(userString || '');
      }
    },
    setUser(obj: I_User) {
      this.user = obj;
    },
    removeUser() {
      this.user = { ...defaultUser };
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
    }
  }
},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
