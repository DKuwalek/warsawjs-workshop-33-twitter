export function formatDatingo(datingo) {
    let d = null;
    if (!datingo) {
        d = new Date(datingo).toLocaleString('pl-PL');
        console.log(d);
    }
    return d;
};