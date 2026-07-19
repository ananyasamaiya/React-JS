import axios from 'axios'

const netRequest = async () =>{
    let resp = await fetch('https://jsonplaceholder.typicode.com/users');
    let res = await resp.json();

    return res;
}


export function showData(func){
    axios.get('https://jsonplaceholder.typicode.com/users')
                .then((recs) =>{
                    console.log(recs.data)
                    func(recs.data);
                }).catch((err) =>{
                    console.log(err);
                })
}

export default netRequest