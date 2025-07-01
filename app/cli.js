#!/usr/bin/env node

import {program, Command, InvalidArgumentError} from 'commander';
import * as packageJson from '../package.json' assert { type: "json" };
import { isValidFolderPath } from './utils.js';
import {generateDto} from './generate.js';

program
    .name('anc')
    .description('Advanced Nest.js CLI')
    .version(packageJson.version);

const generateCommand = new Command('generate');
generateCommand.alias('g')

const generateDtoCommand = new Command('dto');
generateDtoCommand
    .description('Generates DTO files for every CRUD operation')
    .argument('<name>', `DTO name`)
    .argument(`[path]`, `Generation path`, `./`)
    .action((name, path) => {
        if (!isValidFolderPath(path)) {
            throw new InvalidArgumentError(`Invalid path argument`);
        }
        generateDto(name, path);
    });

generateCommand.addCommand(generateDtoCommand);
program.addCommand(generateCommand);

program.parse();
