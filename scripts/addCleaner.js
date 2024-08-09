const fs = require('fs');
const path = require('path');

const directory = '../';
const scriptTag = '<script src="scripts/cleaner.js"></script>\n';

// Function to add script tag
const addScriptTag = (content) => {
    if (!content.includes(scriptTag)) {
        return content.replace('</body>', `${scriptTag}</body>`);
    }
    return content;
};


fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(`Could not list the directory: ${err}`);
        process.exit(1);
    }

    files.forEach((file, index) => {
        const filePath = path.join(directory, file);

        if (path.extname(file) === '.html') {
            fs.readFile(filePath, 'utf-8', (err, content) => {
                if (err) {
                    console.error(`Error reading file ${filePath}: ${err}`);
                    return;
                }

                let newContent = addScriptTag(content);
                // newContent = addStyleToDiv(newContent);

                if (newContent !== content) {
                    fs.writeFile(filePath, newContent, 'utf-8', (err) => {
                        if (err) {
                            console.error(`Error writing file ${filePath}: ${err}`);
                        } else {
                            console.log(`Updates applied to ${file}`);
                        }
                    });
                } else {
                    console.log(`No updates necessary for ${file}`);
                }
            });
        }
    });

});
