import axios from "axios"

export const BASE_URL = process.env.REACT_APP_ENVMT === "production" ? process.env.REACT_APP_BASE_URL : process.env.REACT_APP_BASE_URL_DEV;
export const IMG_PATH = process.env.REACT_APP_ENVMT === "production" ? process.env.REACT_APP_IMG_PATH : process.env.REACT_APP_IMG_PATH_DEV;


export function getFileURL(url) {
    return IMG_PATH + url
}

export const GetData = async (data) => {
    try {
        var config = {
            method: 'post',
            url: BASE_URL,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: {
                func: "1",
                ...data
            }
        };
        const response = await axios(config);
        if (response.data.success) {
            return response.data;
        } else {
            console.log("Error getting data")
        }
    } catch (error) {
        console.log("Error getting data")
        throw new Error(error.response?.data?.message || "Failed to login");
    }
};

export const GetDataLB = async (data) => {
    try {
        var config = {
            method: 'post',
            url: BASE_URL,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: {
                func: "1.1",
                ...data
            }
        };
        const response = await axios(config);
        if (response.data.success) {
            return response.data;
        } else {
            console.log("Error getting data")
        }
    } catch (error) {
        console.log("Error getting data")
        throw new Error(error.response?.data?.message || "Failed to login");
    }
};

export const PostData = async (data) => {
    try {
        let config = {
            method: 'post',
            url: BASE_URL,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: {
                func: "2",
                ...data
            }
        };
        const response = await axios(config);
        if (response.data.success) {
            return response.data;
        } else {
            console.log("Error getting data")
        }
    } catch (error) {
        console.log("Error getting data")
        throw new Error(error.response?.data?.message || "Failed to login");
    }
};
