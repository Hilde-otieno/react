const baseurl = process.env.REACT_APP_BASE_URL;
export const getUsers = async() => {
    try{
        const response = await fetch(`${baseurl}/users`);
        return response.json();
    }catch (error) {
        throw new Error(error.message);
    }
};