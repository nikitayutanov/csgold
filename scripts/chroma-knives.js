'use strict';

const itemType = 'knives';

const originalKnives = Object.values(knivesCollection.generation.first.defaultName);
const originalKnivesFolders = Object.values(knivesCollection.generation.first.folderName);
const originalKnivesMarketNames = Object.values(knivesCollection.generation.first.marketName);
const chromaFinishes = Object.values(knivesCollection.finishes.chroma);

setBackgroundImages(itemType, originalKnivesFolders, chromaFinishes);
setLinks(itemType, originalKnivesMarketNames, chromaFinishes);
setLabelsOnHover(itemType, originalKnives, chromaFinishes);
