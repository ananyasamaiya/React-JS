

const netRequest = async () =>{
    let resp = await fetch('https://jsonplaceholder.typicode.com/users');
    let res = await resp.json();

    return res;
}

export function showData(func){
    netRequest().then((data) =>{
        func(data);
    }).catch((err) =>{
        console.log(err);
    })
}

export default netRequest