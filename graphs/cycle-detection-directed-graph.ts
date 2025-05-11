
/*
Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
The graph is represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge from verticex u to v.

Examples:

Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3]]
Output: true

Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]
Output: false

Constraints:
1 ≤ V, E ≤ 105
*/

function hasCycleDirected(V: number, edges: number[][]): boolean {
    const adj: number[][] = Array.from({ length: V }, () => []);
    const visited: boolean[] = new Array(V).fill(false);
    const recStack: boolean[] = new Array(V).fill(false); // recursion stack

    // Build adjacency list
    for (const [u, v] of edges) {
        adj[u].push(v);
    }

    // DFS to detect cycle
    function dfs(node: number): boolean {
        visited[node] = true;
        recStack[node] = true;

        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) return true;
            } else if (recStack[neighbor]) {
                // Back edge found → cycle
                return true;
            }
        }

        recStack[node] = false; // backtrack
        return false;
    }

    // Check all components
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (dfs(i)) return true;
        }
    }

    return false;
}
console.log(hasCycleDirected(4, [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3]])); // true
console.log(hasCycleDirected(4, [[0, 1], [0, 2], [1, 2], [2, 3]]));        // false
