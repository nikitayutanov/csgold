'use strict';

const itemType = 'knives';
const selectedKnife = 'huntsman';

const spectrumKnives = Object.values(knivesCollection.generation.second.defaultName);
const spectrumKnivesFolders = Object.values(knivesCollection.generation.second.folderName);
const spectrumKnivesMarketNames = Object.values(knivesCollection.generation.second.marketName);
const originalFinishes = Object.values(knivesCollection.finishes.original);

const huntsmanKnives = selectSingleKnife(spectrumKnives, selectedKnife);
const huntsmanKnivesFolders = selectSingleKnife(spectrumKnivesFolders, selectedKnife);
const huntsmanKnivesMarketNames = selectSingleKnife(spectrumKnivesMarketNames, selectedKnife);

setBackgroundImages(itemType, huntsmanKnivesFolders, originalFinishes);
setLinks(itemType, huntsmanKnivesMarketNames, originalFinishes);
setLabelsOnHover(itemType, huntsmanKnives, originalFinishes);
