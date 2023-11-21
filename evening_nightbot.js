/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 evening $(eval evening_nightbot('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/evening_nightbot.js);)
 */
function evening_nightbot(query='') {
    if (query.trim() === 'Nightbot.') {
         return 'Good evening!';
    }
    return ' ';
}