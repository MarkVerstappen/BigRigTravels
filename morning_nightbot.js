/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 morning $(eval morning_nightbot('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/morning_nightbot.js);)
 */
function morning_nightbot(query='') {
    if (query.trim() === 'Nightbot') {
         return 'Good morning sunshine! ☀';
    }
    return ' ';
}