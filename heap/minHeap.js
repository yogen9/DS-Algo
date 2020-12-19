"use strict";
exports.__esModule = true;
exports.MinHeap = void 0;
var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.array = [];
    }
    MinHeap.prototype.getLeftChildIndex = function (index) {
        return 2 * index + 1;
    };
    MinHeap.prototype.getRightChildIndex = function (index) {
        return 2 * index + 2;
    };
    MinHeap.prototype.getParentIndex = function (index) {
        return Math.floor((index - 1) / 2);
    };
    MinHeap.prototype.hasLeftChild = function (index) {
        return this.getLeftChildIndex(index) < this.array.length - 1;
    };
    MinHeap.prototype.hasRightChild = function (index) {
        return this.getRightChildIndex(index) < this.array.length - 1;
    };
    MinHeap.prototype.hasParent = function (index) {
        return this.getParentIndex(index) >= 0;
    };
    MinHeap.prototype.leftChild = function (index) {
        return this.array[this.getLeftChildIndex(index)];
    };
    MinHeap.prototype.rightChild = function (index) {
        return this.array[this.getRightChildIndex(index)];
    };
    MinHeap.prototype.parent = function (index) {
        return this.array[this.getParentIndex(index)];
    };
    MinHeap.prototype.swap = function (indexOne, indexTwo) {
        var temp = this.array[indexOne];
        this.array[indexOne] = this.array[indexTwo];
        this.array[indexTwo] = temp;
    };
    MinHeap.prototype.root = function () {
        return this.array[0];
    };
    MinHeap.prototype.last = function () {
        return this.array[this.array.length - 1];
    };
    MinHeap.prototype.pop = function () {
        if (this.array.length > 0) {
            var item = this.array[0];
            this.array[0] = this.array[this.array.length - 1];
            this.array.pop();
            this.heapifyDown();
            return item;
        }
    };
    MinHeap.prototype.push = function (item) {
        this.array.push(item);
        this.heapifyUp();
    };
    MinHeap.prototype.size = function () {
        return this.array.length;
    };
    MinHeap.prototype.heapifyUp = function () {
        var lastIndex = this.array.length - 1;
        while (this.hasParent(lastIndex) &&
            this.parent(lastIndex) > this.array[lastIndex]) {
            this.swap(this.getParentIndex(lastIndex), lastIndex);
            lastIndex = this.getParentIndex(lastIndex);
        }
    };
    MinHeap.prototype.heapifyDown = function () {
        var index = 0;
        while (this.hasLeftChild(index)) {
            var smallerElemetIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)) {
                smallerElemetIndex = this.getRightChildIndex(index);
            }
            if (this.array[index] > this.array[smallerElemetIndex]) {
                this.swap(index, smallerElemetIndex);
            }
            else {
                break;
            }
            index = smallerElemetIndex;
        }
    };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
var a = [8, 5, 7, 4, 6, 3, 9];
var heap = new MinHeap();
for (var i = 0; i < a.length; i++) {
    heap.push(a[i]);
}
console.log(heap);
