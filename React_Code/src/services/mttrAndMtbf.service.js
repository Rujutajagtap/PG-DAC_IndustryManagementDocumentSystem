import httpClient from '../http-common';

const getAll4 = () => {
    return httpClient.get('/MttrAndMtbfCalulations');
}

const create =(data) => {
    return httpClient.post('/MttrAndMtbfCalulations',data)
}

const get = sr_no => {
    return httpClient.get(`/MttrAndMtbfCalulations/${sr_no}`);
}

const update = data => {
    return httpClient.put('/MttrAndMtbfCalulations', data);
}

const remove = sr_no => {
    return httpClient.delete(`/MttrAndMtbfCalulations/${sr_no}`);
}




export default { getAll4,create,get,update,remove};