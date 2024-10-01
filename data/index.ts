import { AppData } from '~/models/app-data';
import { Game } from '~/models/enum/game';

export const data: AppData = {
  mods: [
    { id: '1.1', name: '1.1.x', game: Game.Factorio },
    { id: '1.1e', name: '1.1.x Expensive', game: Game.Factorio },
    { id: '1.0', name: '1.0.0', game: Game.Factorio },
    { id: '017', name: '0.17.79', game: Game.Factorio },
    { id: '016', name: '0.16.51', game: Game.Factorio },
    { id: '248', name: '248k Standalone', game: Game.Factorio },
    { id: '248o', name: '248k Overhaul', game: Game.Factorio },
    { id: '248kr2sxp', name: '248k + Krastorio 2 + SE', game: Game.Factorio },
    { id: 'aai', name: 'AAI Industry', game: Game.Factorio },
    { id: 'ang', name: "Angel's Industries", game: Game.Factorio },
    { id: 'ango', name: "Angel's Industries Overhaul", game: Game.Factorio },
    { id: 'bio', name: 'Bio Industries', game: Game.Factorio },
    { id: 'bob', name: "Bob's Mods", game: Game.Factorio },
    { id: 'bobang', name: "Bob's & Angel's", game: Game.Factorio },
    { id: 'efs', name: 'Electric Furnaces', game: Game.Factorio },
    { id: 'fpp', name: 'Factorio Plus Plus', game: Game.Factorio },
    { id: 'fep', name: 'FactorioExtended Plus', game: Game.Factorio },
    { id: 'ffw', name: 'Freight Forwarding', game: Game.Factorio },
    { id: 'ir3', name: 'Industrial Revolution 3', game: Game.Factorio },
    { id: 'kr2', name: 'Krastorio 2', game: Game.Factorio },
    { id: 'kr2p', name: 'Krastorio 2 Peaceful', game: Game.Factorio },
    { id: 'kr2248', name: 'Krastorio 2 + 248K', game: Game.Factorio },
    { id: 'kr2aai', name: 'Krastorio 2 + AAI', game: Game.Factorio },
    { id: 'kr2ffw', name: 'Krastorio 2 + FFW', game: Game.Factorio },
    { id: 'kr2sxp', name: 'Krastorio 2 + SE', game: Game.Factorio },
    { id: 'lls', name: 'Lunar Landings', game: Game.Factorio },
    { id: 'mbf', name: 'Mobile Factory', game: Game.Factorio },
    { id: 'msc', name: 'More Science', game: Game.Factorio },
    { id: 'nls', name: 'Nullius', game: Game.Factorio },
    { id: 'omf', name: 'Omnifluid', game: Game.Factorio },
    { id: 'ps2', name: 'Production Scrap 2', game: Game.Factorio },
    { id: 'pys', name: 'Pyanodons', game: Game.Factorio },
    { id: 'pysalf', name: 'Pyanodons + AL', game: Game.Factorio },
    { id: 'qat', name: "Qatavin's More Stuff", game: Game.Factorio },
    { id: 'ram', name: 'Rampant', game: Game.Factorio },
    { id: 'sea', name: 'Sea Block', game: Game.Factorio },
    { id: 'sbk', name: 'Spaceblock', game: Game.Factorio },
    { id: 'sxp', name: 'Space Exploration', game: Game.Factorio },
    { id: 'vbz', name: 'Very BZ', game: Game.Factorio },
    { id: 'wt2', name: 'Warptorio2', game: Game.Factorio },
    { id: 'xan', name: 'Xander Mod', game: Game.Factorio },
    { id: 'dsp', name: 'Dyson Sphere Program', game: Game.DysonSphereProgram },
    { id: 'sfy', name: 'Satisfactory', game: Game.Satisfactory },
    { id: 'coi', name: 'Captain of Industry', game: Game.CaptainOfIndustry },
    { id: 'tta', name: 'Techtonica', game: Game.Techtonica },
    { id: 'ffy', name: 'Final Factory', game: Game.FinalFactory },
    { id: 'ulc', name: 'Ultracube', game: Game.Factorio },
  ],
  modHashV0: [
    '1.1',
    '1.0',
    '0.17',
    '0.16',
    'bio-industries',
    'bobs',
    'bobs-angels',
    'dsp',
    'factorio-extended-plus',
    'industrial-revolution',
    'krastorio2',
    'krastorio2+se',
    'pyanodons',
    'pyanodons+al',
    'seablock',
    'space-exploration',
    'xander',
  ],
  modHash: [
    '1.1',
    '1.0',
    '017',
    '016',
    'bio',
    'bob',
    'bobang',
    'dsp',
    'fep',
    'ir2', // Obsolete
    'kr2',
    'kr2sxp',
    'pys',
    'pysalf',
    'sea',
    'sxp',
    'xan',
    'nls',
    'fpp',
    'ang',
    'msc',
    'sfy',
    'coi',
    'qat',
    '1.1e',
    '248',
    '248o',
    '248kr2sxp',
    'aai',
    'ir3',
    'efs',
    'kr2aai',
    'vbz',
    'ffw',
    'kr2ffw',
    'mbf',
    'omf',
    'kr2248',
    'sbk',
    'wt2',
    'ango',
    'kr2p',
    'ram',
    'tta',
    'utc',
    'ffy',
    'lls',
    'ulc',
    'ps2',
  ],
};
