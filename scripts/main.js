'use strict';

const casesCollection = {
    defaultName: ['CS:GO Weapon Case', 'eSports 2013 Case',
    'Operation Bravo Case', 'CS:GO Weapon Case 2', 'eSports 2013 Winter Case',
    'Winter Offensive Weapon Case', 'CS:GO Weapon Case 3',
    'Operation Phoenix Weapon Case', 'Huntsman Weapon Case',
    'Operation Breakout Weapon Case', 'eSports 2014 Summer Case',
    'Operation Vanguard Weapon Case', 'Chroma Case', 'Chroma 2 Case',
    'Falchion Case', 'Shadow Case', 'Revolver Case', 'Operation Wildfire Case',
    'Chroma 3 Case', 'Gamma Case', 'Gamma 2 Case', 'Glove Case', 'Spectrum Case',
    'Operation Hydra Case', 'Spectrum 2 Case', 'Clutch Case', 'Horizon Case',
    'Danger Zone Case', 'Prisma Case', 'CS20 Case', 'Shattered Web Case',
    'Prisma 2 Case', 'Fracture Case']
}

const knivesCollection = {
    generation: {
        first: {
            defaultName: ['Bayonet', 'Flip Knife', 'Gut Knife', 'Karambit', 'M9 Bayonet'],
            folderName: ['bayonet', 'flip', 'gut', 'karambit', 'm9'],
            marketName: ['bayonet', 'knife_flip', 'knife_gut', 'knife_karambit', 'knife_m9_bayonet']
        },
        second: {
            defaultName: ['Huntsman Knife', 'Butterfly Knife', 'Falchion Knife', 'Shadow Daggers', 'Bowie Knife'],
            folderName: ['huntsman', 'butterfly', 'falchion', 'shadowdaggers', 'bowie'],
            marketName: ['knife_tactical', 'knife_butterfly', 'knife_falchion', 'knife_push', 'knife_survival_bowie']
        },
        third: {
            defaultName: ['Navaja Knife', 'Stiletto Knife', 'Talon Knife', 'Ursus Knife'],
            folderName: ['navaja', 'stiletto', 'talon', 'ursus'],
            marketName: ['knife_gypsy_jackknife', 'knife_stiletto', 'knife_widowmaker', 'knife_ursus']
        },
        fourth: {
            defaultName: ['Nomad Knife', 'Paracord Knife', 'Skeleton Knife', 'Survival Knife'],
            folderName: ['nomad', 'paracord', 'skeleton', 'survival'],
            marketName: ['knife_outdoor', 'knife_cord', 'knife_skeleton', 'knife_canis']
        },
        classic: {
            defaultName: ['Classic Knife'],
            folderName: ['classic'],
            marketName: ['knife_css']
        } 
    },
    finishes: {
        original: ['Vanilla', 'Forest DDPAT', 'Crimson Web', 'Fade', 'Night',
        'Blue Steel', 'Stained', 'Case Hardened', 'Slaughter', 'Safari Mesh', 
        'Boreal Forest',  'Urban Masked',  'Scorched'],
        
        chroma: ['Vanilla', 'Damascus Steel', 'Doppler', 'Marble Fade',
        'Tiger Tooth', 'Rust Coat', 'Ultraviolet'],

        gamma: ['Vanilla', 'Gamma Doppler', 'Freehand', 'Lore', 'Autotronic',
        'Bright Water', 'Black Laminate'],

        newOriginal: ['Vanilla', 'Forest DDPAT', 'Crimson Web', 'Fade',
        'Night Stripe', 'Blue Steel', 'Stained', 'Case Hardened', 'Slaughter',
        'Safari Mesh',  'Boreal Forest',  'Urban Masked',  'Scorched']
    }
}

const glovesCollection = {
    generation: {
        first: {
            defaultName: {
                'Bloodhound Gloves': ['Bronzed', 'Charred', 'Guerrilla', 'Snakebite'],
                'Driver Gloves': ['Crimson Weave', 'Diamondback', 'Lunar Weave', 'Convoy'],
                'Hand Wraps': ['Badlands', 'Leather', 'Slaughter', 'Spruce DDPAT'],
                'Moto Gloves': ['Boom!', 'Cool Mint', 'Eclipse', 'Spearmint'],
                'Specialist Gloves': ['Crimson Kimono', 'Emerald Web', 'Forest DDPAT', 'Foundation'],
                'Sport Gloves': ['Arid', 'Hedge Maze', 'Pandora\'s Box', 'Superconductor']
            },
            folderName: ['bloodhound', 'driver', 'handwraps', 'moto', 'specialist', 'sport']
        },
        second: {
            defaultName: {
                'Driver Gloves': ['Imperial Plaid', 'King Snake', 'Overtake', 'Racing Green'],
                'Hand Wraps': ['Arboreal', 'Cobalt Skulls', 'Duct Tape', 'Overprint'],
                'Moto Gloves': ['Polygon', 'POW!', 'Transport', 'Turtle'],
                'Specialist Gloves': ['Buckshot', 'Crimson Web', 'Fade', 'Mogul'],
                'Sport Gloves': ['Amphibious', 'Bronze Morph', 'Omega', 'Vice'],
                'Hydra Gloves': ['Case Hardened', 'Emerald', 'Mangrove', 'Rattler']
            },
            folderName: ['driver', 'handwraps', 'moto', 'specialist', 'sport', 'hydra']
        }
    }
}



function convertToFileName(name) {
    return name.replace(/[^a-zA-Z0-9]/g, '');
}

function convertToSearchQuery(name) {
    return name.replace(/[^a-zA-Z]/g, '+');
}

function getPathFrom(itemType, folder, fileName) {
    let path;

    if (itemType == 'cases') {
        path = 'url(images/cases/' + fileName + '.png)';
    } else {
        path = 'url(images/' + itemType + '/' + folder + '/' + fileName + '.png)';
    }

    return path;
}

function getUrlFrom(itemType, marketName, searchQuery) {
    let link;

    if (itemType == 'knives') {
        link = 'https://steamcommunity.com/market/search?category_730_Weapon%5B%5D=tag_weapon_' + marketName + '&q=' + searchQuery;
    } else {
        link = 'https://steamcommunity.com/market/search?category_730_Type%5B%5D=tag_Type_Hands&q=' + marketName + '+' + searchQuery;
    }

    return link;
}

function selectSingleKnife(knives, knifeName) {
    let index;

    switch (knifeName) {
        case 'huntsman':
            index = 0;
            break;

        case 'butterfly':
            index = 1;
            break;

        case 'falchion':
            index = 2;
            break;

        case 'shadowdaggers':
            index = 3;
            break;
            
        case 'bowie':
            index = 4;
            break;
    }

    return [knives[index]];
}



function setBackgroundImages(itemType, folders, finishes) {
    const rows = folders.length;
    const columns = (itemType == 'knives') ? finishes.length : finishes[0].length;
    const items = document.getElementsByClassName('item');

    let rowMultiplier = 0;

    let folder;
    let fileName;

    for (let i = 0; i < rows; i++) {
        folder = folders[i];
        for (let j = 0; j < columns; j++) {
            fileName = (itemType == 'knives') ? convertToFileName(finishes[j]) : convertToFileName(finishes[i][j]);
            items[j + rowMultiplier].style.backgroundImage = getPathFrom(itemType, folder, fileName);
        }
        rowMultiplier += columns;
    }
}

function setBackgroundImagesForCases(casesNames) {
    const totalAmount = casesNames.length;
    const cases = document.getElementsByClassName('case');
    
    let fileName;

    for (let i = 0; i < totalAmount; i++) {
        fileName = convertToFileName(casesNames[i]);
        cases[i].style.backgroundImage = getPathFrom('cases', '', fileName);
    }
}


function setLinks(itemType, marketNames, finishes) {
    const rows = marketNames.length;
    const columns = (itemType == 'knives') ? finishes.length : finishes[0].length;
    const itemLinks = document.getElementsByClassName('item-link');

    let rowMultiplier = 0;

    let marketName;
    let searchQuery;

    for (let i = 0; i < rows; i++) {
        marketName = marketNames[i];
        for (let j = 0; j < columns; j++) {
            
            if (itemType == 'knives') {
                if (j != 0) {
                    searchQuery = convertToSearchQuery(finishes[j]);
                    itemLinks[j + rowMultiplier].href = getUrlFrom(itemType, marketName, searchQuery);
                }
            } else {
                searchQuery = convertToSearchQuery(finishes[i][j]);
                itemLinks[j + rowMultiplier].href = getUrlFrom(itemType, marketName, searchQuery);
            }
            
        }
        rowMultiplier += columns;
    }
}


function setLabelsOnHover(itemType, names, finishes) {
    const rows = names.length;
    const columns = (itemType == 'knives') ? finishes.length : finishes[0].length;
    const items = document.getElementsByClassName('item');

    let rowMultiplier = 0;
    
    let name;
    let skin;

    for (let i = 0; i < rows; i++) {
        name = names[i];
        for (let j = 0; j < columns; j++) {
            skin = (itemType == 'knives') ? finishes[j] : finishes[i][j];
            items[j + rowMultiplier].setAttribute('data-name-before', name);
            items[j + rowMultiplier].setAttribute('data-name-after', skin);
        }
        rowMultiplier += columns;
    }
}

function setLabelsOnHoverForCases(casesNames) {
    const totalAmount = casesNames.length;
    const items = document.getElementsByClassName('case');

    for (let i = 0; i < totalAmount; i++) {
        items[i].setAttribute('data-name-after', casesNames[i]);
    }
}
