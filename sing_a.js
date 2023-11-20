/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 sing $(eval sing_a('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/sing_a.js);)
 */
function sing_a(query='') {
    if (query.trim() === 'a song Nightbot!') {
         return '🎶 Steve's been everywhere man, crossed the deserts bare man, he's breathed the mountain air man, of travel he's had his share man, Steve's been everywhere... 🎶';
    }
    return ' ';
}