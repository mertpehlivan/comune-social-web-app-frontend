import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL
export const getCommunityFetch = async (token,id) =>{
    
    try {
        return await axios.get(
            `${baseUrl}/api/v1/community/${id}`,
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