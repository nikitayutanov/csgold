'use strict';

const itemType = 'knives';

const shatteredWebKnives = Object.values(knivesCollection.generation.fourth.defaultName);
const shatteredWebKnivesFolders = Object.values(knivesCollection.generation.fourth.folderName);
const shatteredWebKnivesMarketNames = Object.values(knivesCollection.generation.fourth.marketName);
const newOriginalFinishes = Object.values(knivesCollection.finishes.newOriginal);

setBackgroundImages(itemType, shatteredWebKnivesFolders, newOriginalFinishes);
setLinks(itemType, shatteredWebKnivesMarketNames, newOriginalFinishes);
setLabelsOnHover(itemType, shatteredWebKnives, newOriginalFinishes);
