import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL
export const createVoting = async (token,data) =>{
    try {
        return await axios.post(
            `${baseUrl}/api/v1/voting`,
            data,
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
export const createEvent = async (token,data) =>{
    try {
        return await axios.post(
            `${baseUrl}/api/v1/event`,
            data,
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
export const createPost = async (token,data) =>{
    try {
        return await axios.post(
            `${baseUrl}/api/v1/post`,
            data,
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
export const getPublicationToCommunity = async (token,communityId) =>{
    try {
        return await axios.get(
            `${baseUrl}/api/v1/publication/${communityId}`,
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