import AuthHeader from "./AuthHeader";

const axios = require('axios');
const url = 'https://task-planner-back.herokuapp.com/';


class RequestService{

    async getSource(path){
        const response = await axios.get(url+path, {headers: AuthHeader()});
        return await response.data;
    }

    postResource(path, payload){
        axios.post(url + path, payload, {headers: AuthHeader()})
            .then(response => console.log(response.status))
            .catch(error => {
                if (error.response){
                    alert('Something as wrong');
                    console.log(error.response.status);
                }else{
                    alert('Server error')
                    console.log(error.message)
                }
            })
    }

    login(payload){
        axios.post(url+'user/login', payload)
            .then(response => localStorage.setItem('user', JSON.stringify(response.data)))
            .then(() => console.log('OK'))
            .then()
            .catch(error => {
                if (error.response){
                    alert('Bad credentials');
                    console.log(error.response.status);
                }else{
                    alert('Server error')
                    console.log(error.message)
                }
            });
    }

}

export default new RequestService();