export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let sorted_collection_3 = [];
    
    // แปลง collection_3 จาก มาก ---> น้อย เป็น น้อย ---> มาก
    for (let i = collection_3.length - 1; i >= 0; i--) {
        sorted_collection_3.push(collection_3[i]);
    }

    let mergedArray: number[] = [];
    let i = 0, j = 0, k = 0;

    while (i < collection_1.length || j < collection_2.length || k < sorted_collection_3.length) {
        let minValue = Number.MAX_SAFE_INTEGER;

        if (i < collection_1.length) minValue = Math.min(minValue, collection_1[i]);
        if (j < collection_2.length) minValue = Math.min(minValue, collection_2[j]);
        if (k < sorted_collection_3.length) minValue = Math.min(minValue, sorted_collection_3[k]);

        if (i < collection_1.length && collection_1[i] === minValue) i++;
        else if (j < collection_2.length && collection_2[j] === minValue) j++;
        else if (k < sorted_collection_3.length && sorted_collection_3[k] === minValue) k++;

        mergedArray.push(minValue);
    }

    return mergedArray;
}
