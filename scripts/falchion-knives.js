'use strict';

const itemType = 'knives';
const selectedKnife = 'falchion';

const spectrumKnives = Object.values(knivesCollection.generation.second.defaultName);
const spectrumKnivesFolders = Object.values(knivesCollection.generation.second.folderName);
const spectrumKnivesMarketNames = Object.values(knivesCollection.generation.second.marketName);
const originalFinishes = Object.values(knivesCollection.finishes.original);

const falchionKnives = selectSingleKnife(spectrumKnives, selectedKnife);
const falchionKnivesFolders = selectSingleKnife(spectrumKnivesFolders, selectedKnife);
const falchionKnivesMarketNames = selectSingleKnife(spectrumKnivesMarketNames, selectedKnife);

setBackgroundImages(itemType, falchionKnivesFolders, originalFinishes);
setLinks(itemType, falchionKnivesMarketNames, originalFinishes);
setLabelsOnHover(itemType, falchionKnives, originalFinishes);
