import { ConfigPlugin, withXcodeProject } from '@expo/config-plugins';

const withMyApiKey: ConfigPlugin = config => {
  return withXcodeProject(
    config,
    async (
      config
    ) => {
      const xcodeProject = config.modResults;
      console.log("xcodeProject", JSON.stringify(xcodeProject))

      return config;
    }
  );
};

export default withMyApiKey;
