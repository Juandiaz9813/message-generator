//This is how I got the day of the week
const today = new Date();
const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
const weekDay = days[today.getDay()];

//The arrays we will use to select a special message depending on the day of the week
let messageMonday = ['¡Feliz lunes! Que tu cafe sea fuerte y tu dia corto', '¡Buenos dias! Empieza la semana con una sonrisa y mucho optimismo', '¡Arriba, es lunes! Que esta semana te traiga muchas ganas de comerte al mundo']
let messageTuesday = ['¡Feliz martes! Que hoy este lleno de energia positiva y buenas noticias', '¡!Buenos dias! Que este martes te regale sonrisas y te acerque a tus metas', '¡A disfrutar cada martes! Hoy es un gran dia para ser feliz y lograr lo que te propongas']
let messageWednesday = ['¡Feliz miercoles! Que la energia de mitad de semana te impulse a alcanzar tus metas con una sonrisa', '¡Buen miercoles! Ya cruzamos el ombligo de la semana. ¡Vamos por el resto del dia con todo!', 'Miercoles, ¡La mitad de la semana ha pasado! Que sea un dia lleno de buenas vibras y momentos geniales']
let messageThursday = ['¡Feliz jueves! Que sea un dia lleno de paz, amor y buenas oportunidades', '¡Buen jueves por la mañana! Cada dia es una nueva oportunidad para hacer algo grandioso.', '¡Animo, es jueves! Estamos a un paso de la libertad de fin de semana']
let messageFriday = ['¡Feliz viernes! Que este dia sea el inicio de un fin de semana lleno de alegria y energia positiva', '¡Viernes! Es el dia perfecto para sonreir, dejar atras el estres y recargar energias para difrutas al maximo', '¡Feliz viernes! Que tu dia este lleno de buenas vibras, momentos especiales y muchas razones para sonreir']
let messageSaturday = ['¡Feliz sabado! Que el sol te llene de energia y que hoy sea un dia lleno de alegria', 'Disfruta este sabado al maximo. Es tu dia para relajarte, divertirte y hacer lo que mas te gusta', 'Que este sabado sea tan brillante como tu sonrisa y que te traiga momentos inolvidables']
let messageSunday = ['¡Feliz domingo! Que sea un dia de descanso, paz y disfrute', 'Disfruta de tu domingo, recarga energias y haz lo que te haga feliz. ¡A disfrutar!', 'Que este domingo este lleno de sonrisas y buenos momentos contigo y tus seres queridos']

//The variables that select a random message from the arrays
const randomMondayMessage = messageMonday[Math.floor(Math.random() * messageMonday.length)]
const randomTuesdayMessage = messageTuesday[Math.floor(Math.random() * messageTuesday.length)]
const randomWednesdayMessage = messageWednesday[Math.floor(Math.random() * messageWednesday.length)]
const randomThursdayMessage = messageThursday[Math.floor(Math.random() * messageThursday.length)]
const randomFridayMessage = messageFriday[Math.floor(Math.random() * messageFriday.length)]
const randomSaturdayyMessage = messageSaturday[Math.floor(Math.random() * messageSaturday.length)]
const randomSundayMessage = messageSunday[Math.floor(Math.random() * messageSunday.length)]

//The factory function that generates the message depending on the day
const messageFactory = day => {
    if(day === 'lunes') {
        return randomMondayMessage
    } else if(day === 'martes') {
        return randomTuesdayMessage
    } else if(day === 'miercoles') {
        return randomWednesdayMessage
    } else if(day === 'jueves') {
        return randomThursdayMessage
    } else if(day === 'viernes') {
        return randomFridayMessage
    } else if(day === 'sabado') {
        return randomSaturdayyMessage
    } else if( day === 'domingo') {
        return randomSundayMessage
    } else {
        return 'Unexpected error ! Not a valid day'
    }
};

console.log(messageFactory(weekDay));