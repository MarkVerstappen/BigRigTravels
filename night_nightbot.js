/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 night $(eval night_nightbot('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/night_nightbot.js);)
 */
function night_nightbot(query='') {
    if (query.trim() === 'Nightbot.') {
         return 'Thank you. You sleep well too. 😊';
    }
    return ' ';
}