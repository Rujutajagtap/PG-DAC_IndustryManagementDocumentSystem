import httpClient from '../http-common';

const getAll2 = () => {
    return httpClient.get('/BreakDownAnlysiss');
}

const create =(data) => {
    return httpClient.post('/BreakDownAnlysiss',data)
}

const get = sr_no=> {
    return httpClient.get(`"/BreakDownAnlysiss/${sr_no}"`);
}

const update = data => {
    return httpClient.put('/BreakDownAnlysiss', data);
}

const remove = sr_no => {
    return httpClient.delete(`/BreakDownAnlysiss/${sr_no}`);
}

export default { getAll2,create,get,update,remove};