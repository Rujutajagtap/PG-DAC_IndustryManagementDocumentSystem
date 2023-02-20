import httpClient from '../http-common';

const getAll4 = () => {
    return httpClient.get('/MttrAndMtbfCalulations');

}

const getAll3 = () => {
    return httpClient.get('/ListOfMachiness');
    
}

const getAll2 = () => {
    return httpClient.get('/BreakDownAnlysiss');
    
}

const getAll1 = () => {
    return httpClient.get('/Attendances');
    
}
 




export default { getAll4,getAll3,getAll2,getAll1};