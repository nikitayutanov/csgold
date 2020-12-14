'use strict';

const itemType = 'gloves';

const brokenFangGlovesFolders = Object.values(glovesCollection.generation.third.folderName);
const brokenFangGloves = Object.keys(glovesCollection.generation.third.defaultName);

const brokenFangGlovesFinishes = Object.values(glovesCollection.generation.third.defaultName);

setBackgroundImages(itemType, brokenFangGlovesFolders, brokenFangGlovesFinishes);
setLinks(itemType, brokenFangGlovesFolders, brokenFangGlovesFinishes);
setLabelsOnHover(itemType, brokenFangGloves, brokenFangGlovesFinishes);
