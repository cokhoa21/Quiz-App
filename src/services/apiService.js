import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    // submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data);
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}

const pushUpdateUser = (id, username, role, image) => {
    // submit data
    const data = new FormData();
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    data.append('id', id);
    return axios.put('api/v1/participant', data);
}

const deleteUser = (userID) => {
    return axios.delete('api/v1/participant', { data: { id: userID } });
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

export { postCreateNewUser, getAllUsers, pushUpdateUser, deleteUser, getUserWithPaginate };