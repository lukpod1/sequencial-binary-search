require('dotenv').config()
const generateNumber = require('./AbstractService');

export const getCollection = (database) => {
    const collection = client.db(database).collection(process.env.MONGO_COLLECTION);
    return collection;
}

export const generateDocument = () => {
    const documents = [];
    for (let index = 1; index <= 600; index++) {
        documents.push({ number: generateNumber() });
    }
    return documents;
};

export const find = () => {
    const collection = getCollection();
    const cursor = collection.find();
    const arr = [];

    // Iterate over the cursor
    while (await cursor.hasNext()) {
        const doc = await cursor.next();
        arr.push(doc.number);
    }
}

export const insertMany = () => {
    collection.insertMany(generateDocument())
}