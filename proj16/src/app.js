export const netReq = async () => {
    let resp = await fetch('https://picsum.photos/v2/list');
    let res = await resp.json();

    return res;
}

