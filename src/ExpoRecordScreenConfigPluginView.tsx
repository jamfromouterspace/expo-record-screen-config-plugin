import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoRecordScreenConfigPluginViewProps } from './ExpoRecordScreenConfigPlugin.types';

const NativeView: React.ComponentType<ExpoRecordScreenConfigPluginViewProps> =
  requireNativeViewManager('ExpoRecordScreenConfigPlugin');

export default function ExpoRecordScreenConfigPluginView(props: ExpoRecordScreenConfigPluginViewProps) {
  return <NativeView {...props} />;
}
