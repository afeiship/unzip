import { Unzip, IExtractOptions } from 'zip-lib';
import path from 'path';

interface UnzipOptions {
  source: string;
  target?: string;
  onEntry?: IExtractOptions['onEntry'];
  zlOptions?: Omit<IExtractOptions, 'onEntry'>;
}

const unzip = (inOptions: UnzipOptions) => {
  const { source, target, onEntry, zlOptions } = inOptions;
  const _target = target || path.dirname(source);
  const unzip = new Unzip({
    onEntry,
    ...zlOptions,
  });

  return unzip.extract(source, _target);
};

export default unzip;
