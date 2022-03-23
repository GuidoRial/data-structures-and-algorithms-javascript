# Hash Tables

In computing, a hash table (hash map) is a data structure which implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way (using a linked list).

![Hash Table](https://camo.githubusercontent.com/9ad322f07bd2a15c9ec9eca7bf8ab0ec2abcd05726ed9ddaffedf4ff2d9ac904/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37642f486173685f7461626c655f335f315f315f305f315f305f305f53502e737667)

Hash collision resolved by separate chaining

![Hash Collision solved](https://camo.githubusercontent.com/b5773cab5b0226e1003ef787fc7deb196525eab273cf3ccb152a89bcc77ad31c/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64302f486173685f7461626c655f355f305f315f315f315f315f315f4c4c2e737667)
