'use strict';

const itemType = 'knives';

const classicKnives = Object.values(knivesCollection.generation.classic.defaultName);
const classicKnivesFolders = Object.values(knivesCollection.generation.classic.folderName);
const classicKnivesMarketNames = Object.values(knivesCollection.generation.classic.marketName);
const newOriginalFinishes = Object.values(knivesCollection.finishes.newOriginal);

setBackgroundImages(itemType, classicKnivesFolders, newOriginalFinishes);
setLinks(itemType, classicKnivesMarketNames, newOriginalFinishes);
setLabelsOnHover(itemType, classicKnives, newOriginalFinishes);
