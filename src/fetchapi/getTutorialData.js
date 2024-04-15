export async function getTutorialData () {
    const resp = await fetch("http://localhost:3000/api/tutorials/", { method: "GET", cache: "no-store" });
    const data = await resp.json();
    return data;
}
