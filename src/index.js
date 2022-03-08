import { AssetsManager } from 'miaam';
import Scenes from './scenes.js';

const { importChunk } = AssetsManager.instance;

const { default: MainScene } = await importChunk({ chunk: Scenes.main });

console.log(new MainScene());
