'use strict';

const itemType = 'knives';
const selectedKnife = 'bowie';

const spectrumKnives = Object.values(knivesCollection.generation.second.defaultName);
const spectrumKnivesFolders = Object.values(knivesCollection.generation.second.folderName);
const spectrumKnivesMarketNames = Object.values(knivesCollection.generation.second.marketName);
const originalFinishes = Object.values(knivesCollection.finishes.original);

const wildfireKnives = selectSingleKnife(spectrumKnives, selectedKnife);
const wildfireKnivesFolders = selectSingleKnife(spectrumKnivesFolders, selectedKnife);
const wildfireKnivesMarketNames = selectSingleKnife(spectrumKnivesMarketNames, selectedKnife);

setBackgroundImages(itemType, wildfireKnivesFolders, originalFinishes);
setLinks(itemType, wildfireKnivesMarketNames, originalFinishes);
setLabelsOnHover(itemType, wildfireKnives, originalFinishes);
