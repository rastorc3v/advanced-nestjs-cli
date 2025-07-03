import fs from 'fs';
import path from 'path';
import {capitalize, getDirname } from '../utils.js';
import Handlebars from "handlebars";

const controllerFileExtension = '.ts';
const controllerExtension = '.controller';

export function generateController(name, targetDir) {
    const capitalizedName = name.split('-').map(capitalize).join('');
    const controllerFilePath = path.join(process.cwd(), targetDir, name) + controllerExtension + controllerFileExtension;
    const controllerTemplateFilePath = path.join(getDirname(), 'generate', 'controller.template');
    const controllerTemplate = fs.readFileSync(controllerTemplateFilePath).toString();
    const controllerContent = Handlebars.compile(controllerTemplate)({
        name: capitalizedName[0].toLowerCase() + capitalizedName.slice(1),
        capitalizedName
    });
    console.log(`Generating ${capitalizedName} Controller at ${controllerFilePath}`);
    fs.writeFileSync(controllerFilePath, controllerContent);
}