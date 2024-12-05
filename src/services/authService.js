import api from "@/services/api";

class AuthService{
    async login(email, password){
        try{
            const response = await api.post('/login', {email, password})
            return response.data
        } catch(error){
            throw new Error("Login failed: "+ error.message)
        }
    }
    async loginWithOauth(provider, oauthToken){
        try {
            const response = await api.post(`/auth/${provider}`, {oauthToken})
            return response.data
        } catch (error) {
            throw new Error("Oauth failed: "+error.message)
        }
    }
}
export default new AuthService()