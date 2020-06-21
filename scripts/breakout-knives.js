'use strict';

const itemType = 'knives';
const selectedKnife = 'butterfly';

const spectrumKnives = Object.values(knivesCollection.generation.second.defaultName);
const spectrumKnivesFolders = Object.values(knivesCollection.generation.second.folderName);
const spectrumKnivesMarketNames = Object.values(knivesCollection.generation.second.marketName);
const originalFinishes = Object.values(knivesCollection.finishes.original);

const breakoutKnives = selectSingleKnife(spectrumKnives, selectedKnife);
const breakoutKnivesFolders = selectSingleKnife(spectrumKnivesFolders, selectedKnife);
const breakoutKnivesMarketNames = selectSingleKnife(spectrumKnivesMarketNames, selectedKnife);

setBackgroundImages(itemType, breakoutKnivesFolders, originalFinishes);
setLinks(itemType, breakoutKnivesMarketNames, originalFinishes);
setLabelsOnHover(itemType, breakoutKnives, originalFinishes);
