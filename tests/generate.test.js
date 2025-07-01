const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const cliPath = path.join(__dirname, '../app/cli.js');
const testDirPath = path.join(__dirname, '../test-folder');

describe('`generate` command', () => {
    beforeAll(() => {
        fs.rmSync(testDirPath, { recursive: true, force: true });
        fs.mkdirSync(testDirPath);
    });
    afterAll(() => {
        fs.rmSync(testDirPath, { recursive: true, force: true });
    });

    test('`generate dto` command should generate all DTO files', (done) => {
        execFile('node', [cliPath, 'generate', 'dto', 'test1', './test-folder'], () => {
            expect(fs.readdirSync(testDirPath).length).toEqual(9)
            done()
        });
    });
});