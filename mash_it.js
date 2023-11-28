/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 mash $(eval mash_it('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/mash_it.js);)
 */
function mash_it(query='') {
    if (query.trim() === 'it!') {
         return "Doesn't anyone know how to merge anymore?";
    }
    return 'Whats mash?';
}