migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g6kpr14zmfa47sm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0xeby91x",
    "name": "product_id",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g6kpr14zmfa47sm")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
