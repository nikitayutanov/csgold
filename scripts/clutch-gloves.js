'use strict';

const itemType = 'gloves';

const clutchGlovesFolders = Object.values(glovesCollection.generation.second.folderName);
const clutchGloves = Object.keys(glovesCollection.generation.second.defaultName);

const clutchGlovesFinishes = Object.values(glovesCollection.generation.second.defaultName);

setBackgroundImages(itemType, clutchGlovesFolders, clutchGlovesFinishes);
setLinks(itemType, clutchGlovesFolders, clutchGlovesFinishes);
setLabelsOnHover(itemType, clutchGloves, clutchGlovesFinishes);
