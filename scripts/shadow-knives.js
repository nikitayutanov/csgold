'use strict';

const itemType = 'knives';
const selectedKnife = 'shadowdaggers';

const spectrumKnives = Object.values(knivesCollection.generation.second.defaultName);
const spectrumKnivesFolders = Object.values(knivesCollection.generation.second.folderName);
const spectrumKnivesMarketNames = Object.values(knivesCollection.generation.second.marketName);
const originalFinishes = Object.values(knivesCollection.finishes.original);

const shadowKnives = selectSingleKnife(spectrumKnives, selectedKnife);
const shadowKnivesFolders = selectSingleKnife(spectrumKnivesFolders, selectedKnife);
const shadowKnivesMarketNames = selectSingleKnife(spectrumKnivesMarketNames, selectedKnife);

setBackgroundImages(itemType, shadowKnivesFolders, originalFinishes);
setLinks(itemType, shadowKnivesMarketNames, originalFinishes);
setLabelsOnHover(itemType, shadowKnives, originalFinishes);
