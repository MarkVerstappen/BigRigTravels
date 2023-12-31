/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 amarillo $(eval amarillo_by('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/amarillo_by.js);)
 */
function amarillo_by(query='') {
    if (query.trim() === 'by morning...') {
         return '🎶Up from San Antone... Everything that I got... Is just what I have got on...🎶';
    }
    return 'Wait... Its not morning?!';
}
