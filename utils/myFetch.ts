// A method for used fetch api as par my perfrences.
export async function myFetch(url: string) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}
