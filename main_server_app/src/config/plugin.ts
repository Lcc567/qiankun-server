import { EggPlugin } from 'midway';
export default {
  static: true, // default is true
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
} as EggPlugin;
