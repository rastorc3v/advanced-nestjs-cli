#!/usr/bin/env node

import {program, Command, InvalidArgumentError} from 'commander';
import * as packageJson from '../package.json' assert { type: "json" };
import { isValidFolderPath } from './utils.js';
import {generateDto} from './generate/dto.js';
import {generateController} from "./generate/controller.js";

program
    .name('anc')
    .description('Advanced Nest.js CLI')
    .version(packageJson.version);

const generateCommand = new Command('generate');
generateCommand.alias('g')

const generateDtoCommand = new Command('dto');
generateDtoCommand
    .description('Generates DTO files for every CRUD operation')
    .argument('<name>', `DTO name (kebab-case)`)
    .argument(`[path]`, `Generation path`, `./`)
    .action((name, path) => {
        if (!isValidFolderPath(path)) {
            throw new InvalidArgumentError(`Invalid path argument`);
        }
        generateDto(name, path);
    });

const generateControllerCommand = new Command('controller');
generateControllerCommand
    .alias('c')
    .description('Generates Controller file with methods for every CRUD operation')
    .argument('<name>', `Controller name (kebab-case)`)
    .argument(`[path]`, `Generation path`, `./`)
    .action((name, path) => {
        if (!isValidFolderPath(path)) {
            throw new InvalidArgumentError(`Invalid path argument`);
        }
        generateController(name, path);
    });

generateCommand.addCommand(generateDtoCommand);
generateCommand.addCommand(generateControllerCommand);
program.addCommand(generateCommand);

program.parse();
