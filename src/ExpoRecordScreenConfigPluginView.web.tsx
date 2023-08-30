import * as React from 'react';

import { ExpoRecordScreenConfigPluginViewProps } from './ExpoRecordScreenConfigPlugin.types';

export default function ExpoRecordScreenConfigPluginView(props: ExpoRecordScreenConfigPluginViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
