'use strict';

const itemType = 'knives';

const originalKnives = Object.values(knivesCollection.generation.first.defaultName);
const originalKnivesFolders = Object.values(knivesCollection.generation.first.folderName);
const originalKnivesMarketNames = Object.values(knivesCollection.generation.first.marketName);
const originalFinishes = Object.values(knivesCollection.finishes.original);

setBackgroundImages(itemType, originalKnivesFolders, originalFinishes);
setLinks(itemType, originalKnivesMarketNames, originalFinishes);
setLabelsOnHover(itemType, originalKnives, originalFinishes);
