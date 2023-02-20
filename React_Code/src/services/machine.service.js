import httpClient from '../http-common';

const getAll3 = () => {
    return httpClient.get('/ListOfMachiness');
}

const create =(data) => {
    return httpClient.post('/ListOfMachiness',data)
}

const get = sr_no => {
    return httpClient.get(`/ListOfMachiness/${sr_no}`);
}

const update = data => {
    return httpClient.put('/ListOfMachiness', data);
}

const remove = sr_no => {
    return httpClient.delete(`/ListOfMachiness/${sr_no}`);
}

export default { getAll3,create,get,update,remove};