/*
 * Nightbot command:
 * !commands -ul=moderator -cd=30 country $(eval country_roads('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/country_roads.js);)
 */
function country_roads(query='') {
    if (query.trim() === 'roads... Take me home...') {
         return 'To the place... I belong...';
    }
    return 'Take me home... To the place... I belong...';
}