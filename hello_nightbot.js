/*
 * Nightbot command:
 * !commands add -cd=120 hello $(eval hello_nightbot('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/hello_nightbot.js);)
 */
function hello_nightbot(query='') {
    if (query.trim() === 'Nightbot.') {
         return 'Hello.';
    }
    return ' ';
}