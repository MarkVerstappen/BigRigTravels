/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 bad $(eval bad_bot('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/bad_bot.js);)
 */
function bad_bot(query='') {
    if (query.trim() === 'bot!') {
         return 'I will pretend to do better next time 🔧 person.';
    }
    return '😲';
}