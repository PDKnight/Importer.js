# Importer.js
Importer.js is a library for simple imports of .js files.

`v1.1`

##Why Importer.js?
Because Importer.js is sweet. Look at this adorable example:
```javascript
Importer.add('one.js', 'two.js');
```

It's more simple than you can expect.

##Functions and variables

####Importer.version
Returns current version of **Importer.js**.

####Importer.add(url ... urls [, endFn [, skipOnError]])
Prepares Import.

* **url ... urls**:
  * urls of external `.js` files. You can load any number of them.
* **endFn (optional)**:
  * function that is executed after all of the files were loaded.
* **skipOnError (optional)**:
  * set to true if you want to skip file after an error occured.
