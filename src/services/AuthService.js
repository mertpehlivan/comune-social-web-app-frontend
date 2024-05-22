import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL

export const loginFetch = async (data) =>{
    
    try {
        return await axios.post(
            `${baseUrl}/api/v1/no-auth/login`,
            data
        );
    } catch (error) {
        throw error;
    }
}
export const registerCommunityFetch = async (data) =>{
    
    try {
        return await axios.post(
            `${baseUrl}/api/v1/no-auth/community-register`,
            data
        );
    } catch (error) {
        throw error;
    }
}
export const authenticatedFetch = async (token) =>{
    
    try {
        return await axios.get(
            `${baseUrl}/api/v1/authenticated`,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        throw error;
    }
}