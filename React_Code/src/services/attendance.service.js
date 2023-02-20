import httpClient from '../http-common';

const getAll1 = () => {
    return httpClient.get('/Attendances');
}

const create =(data) => {
    return httpClient.post('/Attendances',data)
}

const get = id => {
    return httpClient.get(`/Attendances/${id}`);
}

const update = data => {
    return httpClient.put('/Attendances', data);
}

const remove = id => {
    return httpClient.delete(`/Attendancesdel/${id}`);
}



export default { getAll1,create,get,update,remove};