import { AppData, Game, Mod } from '~/models';
import appJson from './app/data.json';

const app = appJson as Mod;
export { app };
export const data: AppData = {
  app,
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
    { id: 'ang', name: `Angel's Industries`, game: Game.Factorio },
    { id: 'bio', name: 'Bio Industries', game: Game.Factorio },
    { id: 'bob', name: `Bob's Mods`, game: Game.Factorio },
    { id: 'bobang', name: `Bob's & Angel's`, game: Game.Factorio },
    { id: 'fpp', name: 'Factorio Plus Plus', game: Game.Factorio },
    { id: 'fep', name: 'FactorioExtended Plus', game: Game.Factorio },
    { id: 'ir2', name: 'Industrial Revolution 2', game: Game.Factorio },
    { id: 'kr2', name: 'Krastorio 2', game: Game.Factorio },
    { id: 'kr2sxp', name: 'Krastorio 2 + SE', game: Game.Factorio },
    { id: 'msc', name: 'More Science', game: Game.Factorio },
    { id: 'nls', name: 'Nullius', game: Game.Factorio },
    { id: 'pys', name: 'Pyanodons', game: Game.Factorio },
    { id: 'pysalf', name: 'Pyanodons + AL', game: Game.Factorio },
    { id: 'qat', name: `Qatavin's More Stuff`, game: Game.Factorio },
    { id: 'sea', name: 'Sea Block', game: Game.Factorio },
    { id: 'sxp', name: 'Space Exploration', game: Game.Factorio },
    { id: 'xan', name: 'Xander Mod', game: Game.Factorio },
    { id: 'dsp', name: 'Dyson Sphere Program', game: Game.DysonSphereProgram },
    { id: 'coi', name: 'Captain Of Industry', game: Game.CaptainOfIndustry },
    { id: 'sfy', name: 'Satisfactory', game: Game.Satisfactory },
  ],
  v0: [
    '1.1',
    '1.0',
    '0.17',
    '0.16',
    'bio-industries',
    'bobs',
    'bobs-angels',
    'dsp',
    'capt',
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
  hash: [
    '1.1',
    '1.0',
    '017',
    '016',
    'bio',
    'bob',
    'bobang',
    'dsp',
    'capt',
    'fep',
    'ir2',
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
  ],
};
