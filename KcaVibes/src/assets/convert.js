import fs from 'fs';

fs.readFile('./dummyData.json', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    try {
        const jsonObj = JSON.parse(data);

        // Convert JavaScript object to string before writing to file
        const jsonString = `const jsonObject = ${JSON.stringify(jsonObj, null, 2)};`;

        fs.writeFile('dummyData2.js', jsonString, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('JavaScript object file created successfully');
        });
    } catch(error) {
        console.error(error);
    }
});

