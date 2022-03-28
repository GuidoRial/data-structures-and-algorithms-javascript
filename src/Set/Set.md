# Set
The Set object lets you store unique values of any type, whether primitive values or object references. Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

## Performance
The Set has method checks if a value is in a Set object, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the Set object. In particular, it is, on average, faster than the Array.prototype.includes method when an Array object has a length equal to a Set object's size.