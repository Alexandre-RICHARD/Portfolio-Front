const path = require("path");

module.exports = {
  src: path.resolve(__dirname, "../src"), //? Nos fichiers sources
  assets: path.resolve(__dirname, "../src/assets"), //? Fichiers nécessaires à la construction du projets
  build: path.resolve(__dirname, "../dist"), //? Dossier où se trouveront les fichiers du build du projet compilé
  static: path.resolve(__dirname, "../public"), //? Fichiers statiques à copier directement dans le build final
};
