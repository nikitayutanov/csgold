'use strict';

const itemType = 'knives';

const horizonKnives = Object.values(knivesCollection.generation.third.defaultName);
const horizonKnivesFolders = Object.values(knivesCollection.generation.third.folderName);
const horizonKnivesMarketNames = Object.values(knivesCollection.generation.third.marketName);
const newOriginalFinishes = Object.values(knivesCollection.finishes.newOriginal);

setBackgroundImages(itemType, horizonKnivesFolders, newOriginalFinishes);
setLinks(itemType, horizonKnivesMarketNames, newOriginalFinishes);
setLabelsOnHover(itemType, horizonKnives, newOriginalFinishes);
