'use strict';

const itemType = 'gloves';

const originalGlovesFolders = Object.values(glovesCollection.generation.first.folderName);
const originalGloves = Object.keys(glovesCollection.generation.first.defaultName);

const originalGlovesFinishes = Object.values(glovesCollection.generation.first.defaultName);

setBackgroundImages(itemType, originalGlovesFolders, originalGlovesFinishes);
setLinks(itemType, originalGlovesFolders, originalGlovesFinishes);
setLabelsOnHover(itemType, originalGloves, originalGlovesFinishes);
