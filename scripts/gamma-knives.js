'use strict';

const itemType = 'knives';

const originalKnives = Object.values(knivesCollection.generation.first.defaultName);
const originalKnivesFolders = Object.values(knivesCollection.generation.first.folderName);
const originalKnivesMarketNames = Object.values(knivesCollection.generation.first.marketName);
const gammaFinishes = Object.values(knivesCollection.finishes.gamma);

setBackgroundImages(itemType, originalKnivesFolders, gammaFinishes);
setLinks(itemType, originalKnivesMarketNames, gammaFinishes);
setLabelsOnHover(itemType, originalKnives, gammaFinishes);
