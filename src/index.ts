import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoRecordScreenConfigPlugin.web.ts
// and on native platforms to ExpoRecordScreenConfigPlugin.ts
import ExpoRecordScreenConfigPluginModule from './ExpoRecordScreenConfigPluginModule';
import ExpoRecordScreenConfigPluginView from './ExpoRecordScreenConfigPluginView';
import { ChangeEventPayload, ExpoRecordScreenConfigPluginViewProps } from './ExpoRecordScreenConfigPlugin.types';

// Get the native constant value.
export const PI = ExpoRecordScreenConfigPluginModule.PI;

export function hello(): string {
  return ExpoRecordScreenConfigPluginModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoRecordScreenConfigPluginModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoRecordScreenConfigPluginModule ?? NativeModulesProxy.ExpoRecordScreenConfigPlugin);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoRecordScreenConfigPluginView, ExpoRecordScreenConfigPluginViewProps, ChangeEventPayload };
