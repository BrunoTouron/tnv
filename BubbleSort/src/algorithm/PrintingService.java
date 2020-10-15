package algorithm;

public class PrintingService {

    public void printVector(int vector[]) {
        int lenght = vector.length;
        for (int i = 0; i < lenght; ++i) {
            System.out.print(vector[i] + " ");
        }
        System.out.println();
    }
}
