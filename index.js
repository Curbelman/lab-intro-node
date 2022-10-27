class SortedList {
  constructor() {
  this.items = [];
  this.length = this.items.length;
}

  add(item) {
    if(item !== undefined){
    this.items.push(item);
    this.length++;
    this.items.sort((a,b)=> a-b);
    }
   return this.items;
  }

  get(pos) {
    if(pos > this.length){
      throw new Error ('OutOfBounds');
    }
    else {
      return this.items[pos];
    }
    
  }

  max() {
    if (this.length > 0){
      return this.items[this.length - 1];
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0){
      return this.items[0];
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length > 0){
      this.summation = 0;
      for (i=0; i<this.length;i++){
        this.summation += this.items[i];
      }
      return this.summation;
    }
    else {
      return 0;
    }
  }

//   avg() {}
}

module.exports = SortedList;
