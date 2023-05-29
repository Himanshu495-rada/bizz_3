migrate((db) => {
  const collection = new Collection({
    "id": "g6kpr14zmfa47sm",
    "created": "2023-05-29 17:49:09.709Z",
    "updated": "2023-05-29 17:49:09.709Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0xeby91x",
        "name": "product_ids",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g6kpr14zmfa47sm");

  return dao.deleteCollection(collection);
})
