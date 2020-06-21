'use strict';

const itemType = 'knives';

const horizonKnives = Object.values(knivesCollection.generation.third.defaultName);
const horizonKnivesFolders = Object.values(knivesCollection.generation.third.folderName);
const horizonKnivesMarketNames = Object.values(knivesCollection.generation.third.marketName);
const chromaFinishes = Object.values(knivesCollection.finishes.chroma);

setBackgroundImages(itemType, horizonKnivesFolders, chromaFinishes);
setLinks(itemType, horizonKnivesMarketNames, chromaFinishes);
setLabelsOnHover(itemType, horizonKnives, chromaFinishes);