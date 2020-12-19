export class MinHeap {
  array: number[] = [];

  public getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.array.length - 1;
  }
  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.array.length - 1;
  }
  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number): number {
    return this.array[this.getLeftChildIndex(index)];
  }
  private rightChild(index: number): number {
    return this.array[this.getRightChildIndex(index)];
  }
  private parent(index: number): number {
    return this.array[this.getParentIndex(index)];
  }

  private swap(indexOne: number, indexTwo: number): void {
    let temp: number = this.array[indexOne];
    this.array[indexOne] = this.array[indexTwo];
    this.array[indexTwo] = temp;
  }

  public root(): number {
    return this.array[0];
  }

  public last(): number {
    return this.array[this.array.length - 1];
  }

  public pop(): number {
    if (this.array.length > 0) {
      let item = this.array[0];
      this.array[0] = this.array[this.array.length - 1];
      this.array.pop();
      this.heapifyDown();
      return item;
    }
  }

  public push(item: number) {
    this.array.push(item);
    this.heapifyUp();
  }

  public size(): number {
    return this.array.length;
  }

  private heapifyUp() {
    let lastIndex = this.array.length - 1;
    while (
      this.hasParent(lastIndex) &&
      this.parent(lastIndex) > this.array[lastIndex]
    ) {
      this.swap(this.getParentIndex(lastIndex), lastIndex);
      lastIndex = this.getParentIndex(lastIndex);
    }
  }

  private heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerElemetIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerElemetIndex = this.getRightChildIndex(index);
      }

      if (this.array[index] > this.array[smallerElemetIndex]) {
        this.swap(index, smallerElemetIndex);
      } else {
        break;
      }
      index = smallerElemetIndex;
    }
  }
}
