# Graph

In computer science, a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics, specifically the field of graph theory

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges, arcs, or lines for an undirected graph and as arrows, directed edges, directed arcs, or directed lines for a directed graph. The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.

![Graph Representation](https://camo.githubusercontent.com/e21c303c5cd7a3dab5743ee57eca009991c40333ac8653ba11696f7aaaa91dfb/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f67726170682e6a7067)

A graph **G** is an ordered pair of a set **V** of vertices and a ser **E** of edges

```
G = (V, E)

```

## Directed and undirected graph

A directed graph, also called a digraph, is a graph in which the edges have a direction. This is usually indicated with an arrow on the edge; more formally, if v and w are vertices, an edge is an unordered pair {v,w}, while a directed edge, called an arc, is an ordered pair (v,w) or (w,v). The arc (v,w) is drawn as an arrow from v to w. If a graph contains both arcs (v,w) and (w,v), this is not a "multiple edge'', as the arcs are distinct. It is possible to have multiple arcs, namely, an arc (v,w) may be included multiple times in the multiset of arcs. As before, a digraph is called simple if there are no loops or multiple arcs.
![directed graph](https://upload.wikimedia.org/wikipedia/commons/1/1c/Directed_graph%2C_cyclic.svg)

An undirected graph is a set of nodes and a set of links between the nodes. Each node is called a vertex, each link is called an edge, and each edge connects two vertices. The order of the two connected vertices is not important. An undirected graph is a finite set of vertices together with a finite set of edges.

![undirected graph](https://www.cpp.edu/~ftang/courses/CS241/notes/images/graph/graph1.bmp)

## Weighted and unweighted graph

A weighted graph is a graph with edges labeled by numbers (called
weights). In general, we only consider nonnegative edge weights.
Sometimes, ∞ can also be allowed as a weight, which in optimization
problems generally means we must (or may not) use that edge.

If we care only if two nodes are connected or not, we call such a graph unweighted. For the nodes with an edge between them, we say they are adjacent or neighbors of one another.
