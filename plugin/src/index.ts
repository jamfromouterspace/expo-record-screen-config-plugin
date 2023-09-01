import { ConfigPlugin, withXcodeProject, IOSConfig } from '@expo/config-plugins';

const withReplayKit: ConfigPlugin = config => {
  return withXcodeProject(
    config,
    async (
      config
    ) => {
      if (!config.modRequest.projectName) {
        // error
        throw new Error("Cannot find project name")
      }
      let xcodeProject = config.modResults;
      const target = IOSConfig.XcodeUtils.getApplicationNativeTarget({
          project: config.modResults,
          projectName: config.modRequest.projectName,
      });
      xcodeProject.addFramework("ReplayKit.framework", { target: target.uuid, weak: true });
      return config;
    }
  );
};

export default withReplayKit;
