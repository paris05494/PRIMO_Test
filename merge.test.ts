import { merge } from './merge';

describe('merge function', () => {
  it('should merge and sort the arrays correctly', () => {
    const collection_1 = [1, 13, 28];
    const collection_2 = [2, 14, 32];
    const collection_3 = [100, 89, 67, 32, 28];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 13, 14, 28, 28, 32, 32, 67, 89, 100]);
  });

  it('should handle empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  it('should merge with one empty array', () => {
    const collection_1 = [1, 2, 3];
    const collection_2: number[] = [];
    const collection_3 = [7, 5, 3];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 3, 5, 7]);
  });

  it('should merge correctly when numbers are duplicated', () => {
    const collection_1 = [1, 1, 2, 2, 3, 3];
    const collection_2 = [3, 3, 4, 4, 5, 5];
    const collection_3 = [9, 7, 5, 3, 1];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 7, 9]);
  });

  it('should merge correctly when collection_1 has greater values than collection_3', () => {
    const collection_1 = [10, 12, 15];
    const collection_2 = [8, 9, 14];
    const collection_3 = [7, 5, 3];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([3, 5, 7, 8, 9, 10, 12, 14, 15]);
  });

  it('should merge correctly when all numbers are the same', () => {
    const collection_1 = [555, 555, 555];
    const collection_2 = [555, 555, 555];
    const collection_3 = [555, 555, 555];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([555, 555, 555, 555, 555, 555, 555, 555, 555]);
  });
});
