import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

import { DalDumper } from './DalDumper';
import { DalImpl } from './DalImpl';
import Dal from './Dal';
const { Filesystem } = Plugins;
export class FileDumper {

    // https://capacitor.ionicframework.com/docs/apis/filesystem/
    async writeDump(path: string, content: string) {
        try {
            Filesystem.writeFile({
                path: path,
                data: content,
                directory: FilesystemDirectory.Documents,
                encoding: FilesystemEncoding.UTF8
            })
        } catch (e) {
            console.error('Unable to write file', e);
        }
    }

    async readDump(path: string) {
        let contents = await Filesystem.readFile({
            path: path,
            directory: FilesystemDirectory.Documents,
            encoding: FilesystemEncoding.UTF8
        });
        console.log(contents);
    }
}
