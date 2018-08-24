import { schema } from 'normalizr';

const myMusic = new schema.Entity('myMusic', {}, {
  idAttribute: 'id'
});
const recommendMusic = new schema.Entity('recommendMusic', {}, {
  idAttribute: 'id'
});

export const MYMUSIC = [myMusic];
export const RECOMMENDMUSIC = [recommendMusic];

