import fs from 'fs';
import path from 'path';
import {capitalize} from '../utils.js';

const dtoFilesExtension = '.ts';
const dtoExtension = '.dto';
const dtoTemplates = [
    "create-{name}-request-body",
    "create-{name}-response",
    "delete-{name}-request-params",
    "edit-{name}-request-body",
    "edit-{name}-request-params",
    "edit-{name}-response",
    "get-{name}-request-params",
    "get-{name}-response",
    "{name}"
];

const dtoBaseImportTemplate = `import { {capitalizedName}Dto } from './${dtoTemplates.at(-1)}${dtoExtension}';`
const dtoClassTemplate = `export class {capitalizedFileName}Dto { }`;

export function generateDto(name, targetDir) {
    const capitalizedName = name.split('-').map(capitalize).join('');
    const dtoBaseImportContent = dtoBaseImportTemplate
        .replace(`{name}`, name)
        .replace(`{capitalizedName}`, capitalizedName);
    dtoTemplates
        .map(template => template.replace(`{name}`, name))
        .map(dtoFileName => {
            const capitalizedFileName = dtoFileName.split('-').map(capitalize).join('');
            const dtoFilePath = path.join(process.cwd(), targetDir, dtoFileName) + dtoExtension + dtoFilesExtension;
            const dtoClassContent = dtoClassTemplate
                .replace(`{capitalizedFileName}`, capitalizedFileName);
            const dtoContent = dtoFileName === name ? dtoClassContent : dtoBaseImportContent + '\n\n' + dtoClassContent;
            console.log(`Generating ${capitalizedFileName} DTO at ${dtoFilePath}`);
            fs.writeFileSync(dtoFilePath, dtoContent);
        })
}