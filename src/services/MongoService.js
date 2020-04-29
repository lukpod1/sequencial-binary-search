require('dotenv').config()
const generateNumber = require('./AbstractService');

const generateDocument = () => {
    const documents = [];
    for (let index = 1; index <= 600; index++) {
        documents.push({ number: generateNumber() });
    }
    return documents;
};

const find = async (collection) => {
    const cursor = await collection.find();
    const arr = [];

    while (await cursor.hasNext()) {
        const doc = await cursor.next();
        arr.push(doc.number);
    }

    return arr;
}

const insertMany = async () => {
    await collection.insertMany(generateDocument())
}

module.exports = { find };