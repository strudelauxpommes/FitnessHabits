import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
const { Filesystem } = Plugins;

import { DalDumper } from './DalDumper';
import { DalImpl } from './DalImpl';
import Dal from './Dal';

export class FileDumper {

    async dump() {
        const dumper = new DalDumper();
        const dump = await dumper.dump();
        const dumpString = JSON.stringify(dump);
        const now = new Date();
        const path = now.toISOString() + ".bak";
        await this._writeDump(path, dumpString);
        return true;
    }

    // https://capacitor.ionicframework.com/docs/apis/filesystem/
    async _writeDump(path: string, content: string) {
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
