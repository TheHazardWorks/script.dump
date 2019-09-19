// =================================================================================
//  Extended Array Functions
// =================================================================================
// Pick a random element in the Array
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}
// Shuffle the Array
Array.prototype.shuffle = function() {
    let i = this.length;
    
    if(i == 0) { return this };

    while(--i) {
        let k = Math.floor(Math.random() * (i + 1));
        let t = this[i];
        this[i] = this[k];
        this[k] = t;
    }
    return this;
}
// Array join method (If not exists)
Array.prototype.join = function(joint = ',') {
    let output = String();
    
    for(let i = 0; i < this.length; i++) {
        if(i < this.length) {
            output += this[i] + joint;
        } else {
            output += this[i]
        }
    }
    return output;
}
// Clean Array of Duplicates
Array.prototype.clean = function() {
    let cleanArray = new Array();

    for(let i = 0; i < this.length; i++) {
        let exists = Boolean(~cleanArray.indexOf(this[i]));
        if(!exists) {
            cleanArray.push(this[i]);
        }
    }
    return cleanArray;
}
// Remove element's in Array that match a value
Array.prototype.remove = function(item = undefined) {
    if(item = undefined) {
        return;
    } else {
        for(let i = 0; i < this.length; i++) {
            if(item = this[i]) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    }
}
// Check if an item exists in the Array
Array.prototype.exists = function(item = undefined) {
    if(item == undefined) {
        return false;
    } else {
        return Boolean(~this.indexOf(item));
    }
}