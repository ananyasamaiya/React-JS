const netReq = async (upd_fun) =>{
    let resp = await fetch('https://picsum.photos/v2/list');
    let res = await resp.json();

    upd_fun(res);
}


export {netReq};