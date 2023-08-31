import ExpoNativeConfigurationModule from './ExpoRecordScreenConfigPluginModule';

export function getApiKey(): string {
  return ExpoNativeConfigurationModule.getApiKey();
}