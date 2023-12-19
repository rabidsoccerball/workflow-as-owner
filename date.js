const clock2 = document.querySelector('.clock2');
const clock = document.querySelector('.clock');
const long = document.querySelector('.long');
const Mil = document.querySelector('.Mil');
const Slash = document.querySelector('.Slash')
const Euro = document.querySelector('.Euro')
const tick = () => {
    const now = new Date();
    const AMPM = dateFns.format(now, 'a')
    const hs = dateFns.format(now, 'hh')
    const hm = dateFns.format(now, 'HH');
    const m = dateFns.format(now, 'mm');
    const s = dateFns.format(now, 'ss');
    const jslong = dateFns.format(now, 'MMMM DD, YYYY')
    const jsMil = dateFns.format(now, 'DD MMM YYYY' )
    const jsSlash =dateFns.format(now, 'M/DD/YY')
    const jsEuro = dateFns.format(now, 'DD/M/YYYY')

    const htmlEuro =`<span>${jsEuro}</span>`
    const htmlSlash = `<span>${jsSlash}</span>`;
    const htmlMil = `<span>${jsMil}</span>`;
    const htmllong = `<span>${jslong}</span>`;
    const html= `<span>${hm}:${m}:${s}</span>`;
    const html2= `<span>${hs}:${m}:${s} ${AMPM}</span>`;
    clock.innerHTML = html;
    clock2.innerHTML= html2;
    long.innerHTML = htmllong;
    Mil.innerHTML= htmlMil;
    Slash.innerHTML= htmlSlash;
    Euro.innerHTML= htmlEuro;
};

setInterval(tick, 1000);