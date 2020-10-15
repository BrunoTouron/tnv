package algorithm;

public class OrderingService {

    public int[] bubbleSort(int[] vector) {
        int length = vector.length;
        for (int i = 0; i < length - 1; i++) {
            for (int j = 0; j < length - i - 1; j++)
                if (vector[j] > vector[j + 1]) {
                    int temp = vector[j];
                    vector[j] = vector[j + 1];
                    vector[j + 1] = temp;
                }
        }

        return vector;
    }
}
