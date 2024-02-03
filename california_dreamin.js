/*
 * Nightbot command:
 * !commands add -ul=moderator -cd=30 california $(eval california_dreamin('$(query)'); $(urlfetch json https://raw.githubusercontent.com/MarkVerstappen/BigRigTravels/master/california_dreamin.js);)
 */
function california_dreamin(query='') {
    if (query.trim() === 'dreamin...') {
         return '🎶On such a winter\'s day...🎶';
    }
    return 'California? I\'m no topography expert, but lets give another packet to Jemima! 🐸';
}
