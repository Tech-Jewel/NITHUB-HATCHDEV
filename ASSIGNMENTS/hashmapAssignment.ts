// Constructing a hashmap that doesn't allow collision

class NoCollisionHashMap<K extends string, V> {
  private size: number;
  private buckets: Array<{ key: K; value: V } | null>;
  
  constructor(size: number = 100) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }
  
  private hash(key: K): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  
  set(key: K, value: V): void {
    const index = this.hash(key);
  
    const current = this.buckets[index];
  
    if (current === null) {
      this.buckets[index] = { key, value };
    } else if (current.key === key) {
      // Update value if same key
      this.buckets[index] = { key, value };
    } else {
      // If collision is detected
      throw new Error(`Collision detected for key "${key}" at index ${index}`);
    }
  }
}