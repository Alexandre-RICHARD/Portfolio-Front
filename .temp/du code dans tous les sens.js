
// La méthode shuffle, utilisé pour randomizer l'ordre d'un tableau et aisni le mélanger
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};