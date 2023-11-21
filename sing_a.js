/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 sing $(eval bad_bot('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/sing_a.js);)
 */
function sing_a(query='') {
    if (query.trim() === 'a song Nightbot!') {
         return '🎶Steve's been everywhere man, Steve's Crossed the deserts bare, man Steve's breathed the mountain air, man Of travel Steve's had my share, man Steve's been everywhere!🎶';
    }
    return ' ';
}