const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const cliPath = path.join(__dirname, '../app/cli.js');
const testDirPath = path.join(__dirname, '../test-folder');

describe('`generate` command', () => {
    beforeEach(() => {
        if (fs.existsSync(testDirPath)) {
            fs.rmSync(testDirPath, { recursive: true, force: true });
        }
        fs.mkdirSync(testDirPath);
    });
    afterEach(() => {
        if (fs.existsSync(testDirPath)) {
            fs.rmSync(testDirPath, { recursive: true, force: true });
        }
    });

    test('`generate dto` command should generate all DTO files', (done) => {
        execFile('node', [cliPath, 'generate', 'dto', 'test1', './test-folder'], () => {
            expect(fs.readdirSync(testDirPath).length).toEqual(9)
            done()
        });
    });

    test('`generate controller` command should generate controller', (done) => {
        execFile('node', [cliPath, 'generate', 'controller', 'test1', './test-folder'], () => {
            expect(fs.readdirSync(testDirPath).length).toEqual(1);
            done()
        });
    });
});