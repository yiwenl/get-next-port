// ci.js

const fs = require('fs-extra');
const path = require('path');
const TARGET_DIR = path.resolve('./test');

const onEmptyDir = () => {
	console.log('Directory Cleared', TARGET_DIR);

	const templateFile = path.resolve('./tasks/template.html');
	const targetFile = path.resolve(TARGET_DIR, './index.html');

	fs.copy(templateFile, targetFile, (err)=> {
		if(err) {
			console.log('Error Copying file', err);
		} else {
			console.log('Template File Copied', targetFile);
		}
	});
}


fs.emptyDir(TARGET_DIR, onEmptyDir);