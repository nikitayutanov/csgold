'use strict';

const itemType = 'knives';

const spectrumKnives = Object.values(knivesCollection.generation.second.defaultName);
const spectrumKnivesFolders = Object.values(knivesCollection.generation.second.folderName);
const spectrumKnivesMarketNames = Object.values(knivesCollection.generation.second.marketName);
const chromaFinishes = Object.values(knivesCollection.finishes.chroma);

setBackgroundImages(itemType, spectrumKnivesFolders, chromaFinishes);
setLinks(itemType, spectrumKnivesMarketNames, chromaFinishes);
setLabelsOnHover(itemType, spectrumKnives, chromaFinishes);
