from pymongo import MongoClient
from bson import ObjectId

class MongoDal():
    def __init__(self, dbAddress):
        client = MongoClient(dbAddress)
        self.db = client.toDoList.toDoList

    def getData(self, id):
        data = dict()
        if (id):
            id = ObjectId(id)
            data = self.db.find_one({'_id': id})
            del data["_id"]
        return data

    def deleteData(self, id):
        self.db.delete_one({'_id': ObjectId(id)})

    def insertData(self, jsonData, id=None):
        if(id):
            self.deleteData(id)
        
        result = self.db.insert_one(jsonData)
        return (True, result.inserted_id)
