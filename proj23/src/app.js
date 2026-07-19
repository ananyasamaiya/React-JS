import axios from 'axios';
function fetchRecords(setRecs,setxRecs){
    let url = 'https://fakestoreapi.com/products';
    axios.get(url)
            .then((response) =>{
                setRecs(response.data);
                setxRecs(response.data)
            })
            .catch((err) =>{
                console.log(err);
            })   
}

export {fetchRecords};
