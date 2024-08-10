import fs from 'fs';
import unzip from '../src';

describe('api.basic', () => {
  beforeEach(() => {
    // delete the __tests__/dist folder if it exists
    fs.rmdirSync('__tests__/dist', { recursive: true });
    fs.rmdirSync('__tests__/test124', { recursive: true });
  });

  test('No target will use default target', async () => {
    await unzip({
      source: '__tests__/dist.zip',
    });

    expect(fs.existsSync('__tests__/dist/index.d.ts')).toBe(true);
  });

  test('has target will use target', async ()=>{
    await unzip({
      source: '__tests__/dist.zip',
      target: '__tests__/test124',
      zlOptions: {
        overwrite: true
      }
    });
    expect(fs.existsSync('__tests__/test124/dist/index.d.ts')).toBe(true);
  })
});
