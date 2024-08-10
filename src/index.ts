import zl, { IExtractOptions } from 'zip-lib';

interface UnzipOptions {
  source: string;
  target: string;
  onEntry?: IExtractOptions['onEntry'];
  zlOptions?: Omit<IExtractOptions, 'onEntry'>;
}

const unzip = (inOptions: UnzipOptions) => {
  const { source, target, onEntry, zlOptions } = inOptions;
  const unzip = new zl.Unzip({
    onEntry,
    ...zlOptions,
  });

  return new Promise((resolve, reject) => {
    unzip.extract(source, target).then(resolve, reject);
  });
};

export default unzip;
