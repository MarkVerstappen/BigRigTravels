/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 afternoon $(eval afternoon_nightbot('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/afternoon_nightbot.js);)
 */
function afternoon_nightbot(query='') {
    if (query.trim() === 'Nightbot.') {
         return 'Hello, midday marvel!';
    }
    return '👋';
}