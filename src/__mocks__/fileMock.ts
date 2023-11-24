import * as path from "path";

const process = (sourceText: string, sourcePath: string, options: any) => {
  return {
    code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
  };
};

export default process;
