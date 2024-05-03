export async function getTutorialData () {
    let apikey = process.env.API_KEY;
    const resp = await fetch(`${apikey}/api/tutorials/`, { method: "GET", cache: "no-store" });
    const data = await resp.json();
    return data;
}
