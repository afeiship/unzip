import { Unzip, IExtractOptions } from 'zip-lib';

interface UnzipOptions {
  source: string;
  target: string;
  onEntry?: IExtractOptions['onEntry'];
  zlOptions?: Omit<IExtractOptions, 'onEntry'>;
}

const unzip = (inOptions: UnzipOptions) => {
  const { source, target, onEntry, zlOptions } = inOptions;
  const unzip = new Unzip({
    onEntry,
    ...zlOptions,
  });

  return unzip.extract(source, target);
};

export default unzip;
