import { defineStore } from "pinia";
import authService from "@/services/authService";

const useUserStore = defineStore('user',{
    state: () => ({
        userInfo: null,
        token: null,
        isLoggedIn: false,
        error: null,
    }),
    getter: {
        isAuthenticated: (state) => !!state.token,
        isLoggedIn: (state) => state.isLoggedIn,
        getUserName: (state) => state.UserInfo?.name || "Guest User"
    },
    actions: {
        async loginWithEmail(email, password){
           try {
            const {token, user} = await authService.login(email, password)
            this.token = token
            this.user = user
            this.isLoggedIn = true
            // Save token in Cache
            localStorage.setItem('authToken', token)
           } catch (error) {
            this.error = error.response?.data?.message || 'Login Failed'
           }
        }
    }
});

export default useUserStore
