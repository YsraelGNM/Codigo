var fecha = new Date();
document.write(`<p>Fecha Actual => ${fecha}</p>`);

var fecha2 = new Date('March 1 2019');
document.write(`<p>Fecha Actual => ${fecha2}</p>`);

var fecha3 = new Date(2019, 10, 10, 14, 55, 00);
document.write(`<p>Fecha Actual => ${fecha3}</p>`);
document.write(`<p>Fecha Actual => ${fecha3.getFullYear()}</p>`);
document.write(`<p>Fecha Actual => ${fecha3.getDate()}</p>`);
document.write(`<p>Fecha Actual => ${fecha3.getDate() +15}</p>`);
document.write(`<p>Fecha Actual => ${fecha3.getHours()}</p>`);

var navidad = new Date(2019,25,12);
var resto = navidad - fecha;
//resto = resto
document.write(`<p>Falta para navidad => ${cdate(resto)}</p>`);

var nacimiento = new Date(1977,5,8);
document.write(`${Math.floor((((((fecha-nacimiento)/1000)/60)/60)/24)/365)} años`);

