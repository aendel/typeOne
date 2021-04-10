import {resources} from './config';

export type DefaultResources = typeof resources['en'];
export type AvailableResources = keyof typeof resources;
