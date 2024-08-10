import zl, { IExtractOptions } from 'zip-lib';

interface UnzipOptions {
  source: string;
  target: string;
  onEntry?: IExtractOptions['onEntry'];
  zipOptions?: Omit<IExtractOptions, 'onEntry'>;
}

const unzip = (inOptions: UnzipOptions) => {
  const { source, target, onEntry, ...rest } = inOptions;
  const unzip = new zl.Unzip({
    onEntry,
    ...rest,
  });

  return new Promise((resolve, reject) => {
    unzip.extract(source, target).then(resolve, reject);
  });
};

export default unzip;
