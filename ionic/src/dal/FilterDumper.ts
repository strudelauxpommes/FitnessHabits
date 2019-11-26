import { Plugins } from '@capacitor/core';

import Dal from './Dal';
import Item from './model/item';
import { Value } from './model/value';
import { DateWrapperImpl } from './dateWrapper/dateWrapperImpl';
import DateWrapper from './dateWrapper/dateWrapper';
import { DalDumper } from './DalDumper'
import { FileDumper } from './FileDumper'

const { Storage } = Plugins;

export class FitlerDumper {

    async dump(begin: Date, end: Date, blackListKeys: Array<string>) {
        const fileDumper = new FileDumper();
        let dump;
        const dalDumper = new DalDumper();
        if (blackListKeys.length === 0) {
            dump = await dalDumper.dump();
        } else {
            dump = await dalDumper.dumpFilter(begin, end, blackListKeys);
        }
        const dumpString = JSON.stringify(dump);
        const now = new Date();
        const path = now.toISOString() + ".bak";
        await fileDumper.writeDump(path, dumpString);
    }

    async dumpAll() {
        const begin = new Date(0);
        const end = new Date();
        await this.dump(begin, end, []);
    }
}
