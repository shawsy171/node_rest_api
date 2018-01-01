# Mongo Notes

- the mongo directory is in root directory
goto
```
  mongo/bin
```

- `mongod` starts the database server
- we need to set the database path `dbpath` (which is in the monngo-data)

so to start the server we enter:
```
./mongod --dbpath ~/mongo-data
```

in a new terminal to access mongo 
```
./mongo
```

### To create a new document 

```
db.Todos.insert({text: 'First new insert'})
```
### To Find a record

```
db.Todos.find()
```

Vocab 

| SQL      |   Nosql    |
| -------- | ---------- |
| Table    | Collection |
| Row/record | Document 
| columns | properties?

# working with mongo no node 

Information for the API can be found here 
node mongodb native