import {apiParams} from "./api-params.js";
const a = "Phapix"
async function gc(e) {
    e = e.slice(0, 22);
    const offset= await getOffset()
    const r = `${rnd(89) + 10}${(new Date).getTime() - offset}${rnd(89) + 10}${e}`;
    const i = rnd(31);
    const o = [i + 32, ...ec(r, i)].map(s => String.fromCharCode(s)).join("");
    return btoa(o);
}
function ec(t, e) {
    const r = rk(e).reverse();
    const i = t.split("").map(a => a.charCodeAt(0));
    let o = [];
    for (; o.length < i.length; ) {
        o = [...o, ...r];
    }
    return i.map((a, u) => a ^ o[u]);
}
function mc(e, r, i) {
    return e.slice(-r).slice(0, r - i)
}
function isapi(e) {
    const r = mc(a, 4, 1);
    let i = e?.toLowerCase() || "";
    return i.startsWith(`${r}/`) && (i = "/" + i),
        i.indexOf(`/${r}/`) >= 0 ? i.split(`/${r}/`)[1].toUpperCase() : ""
}
function rnd(e) {
    return Math.ceil(Math.random() * e);
}

function sc() {
    return [58, 43, 197, 133, 4, 165, 110, 3, 44, 202, 186, 28, 118, 177, 32, 94, 219, 6, 199, 27, 101, 191, 66, 115, 234, 120, 10, 236, 104, 108, 74, 247, 68, 198, 62, 203, 17, 102, 185, 42].slice(-36).slice(0, 32);
}

function rk(t) {
    const e = sc();
    const r = t % 3 + 1;
    return Array.from({ length: 10 }, (i, o) => e[(t + o * r) % e.length]);
}
async function getOffset() {
    try {
        let startTime = Date.now();
        const serverTimeAPI = apiParams.requestWithAPIUrl(apiParams.login).toLowerCase().replace("/auth/login","/servertime")
        const response = await fetch(serverTimeAPI);
        const endTime = Date.now();
        startTime = endTime - startTime;
        const serverTimeString = await response.text();
        let serverTimeData;
        try {
            serverTimeData = JSON.parse(serverTimeString);
        } catch (e) {
            serverTimeData = serverTimeString;
        }

        const serverTime = Date.parse(serverTimeData+"+0700");
        return endTime - serverTime - startTime;
    } catch (error) {
        console.error("Error getting offset:", error);
        return 0; // Hoặc giá trị mặc định khác
    }
}
export {getOffset,gc,isapi}