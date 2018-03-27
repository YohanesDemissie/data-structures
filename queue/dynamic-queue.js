'use strict'

function Queue() { //creating our constructor
  this._storage = {}//this.maxSize = this.maxSize
  this._newestIndex = 1//this.top = null or in this case, this.top = 1
  this._oldestIndex = 1//this.bottom = null in this case, this.bottom = 1
}
Queue.prototype.size = function () {
  return this._newestIndex - this._oldestIndex; //maxSize = 1080 is just a generic method but this new method makes sure we are efficient with data space and only request the dataspace that we will use
};

Queue.prototype.enqueue = function (data) {
  this._storage[this._newestIndex] = data; //creates a counter for our designated storage space
  this._newestIndex++; //adds to the counter above (data)
}

Queue.prototype.dequeue = function () {
  var oldestIndex = this._oldestIndex, //L.I.F.O deques from the bottom up
    newestIndex = this._newestIndex,
    deletedData;

  if (oldestIndex !== newestIndex) { //checking for a null queue, and continuting if not null
    deletedData = this._storage[oldestIndex]; //temporary file for deleted (dequeued) content
    delete this._storage[oldestIndex]; //delete temp file
    this._oldestIndex++; //return oldest index and all the leading nodes

    return deletedData; // return deleted data
  }
};

