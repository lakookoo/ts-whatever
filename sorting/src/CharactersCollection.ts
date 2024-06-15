export class CharacterCollection {
    constructor( public data: string) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const chars = this.data.split('');
        const leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;

        this.data = chars.join('');
    }
}