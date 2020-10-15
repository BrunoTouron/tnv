package algorithm;

public class Init {

    public static void main(String[] args) {

        OrderingService orderingService = new OrderingService();
        PrintingService printingService = new PrintingService();

        int vector[] = {5, 3, 2, 4, 7, 1, 0, 6};
        final int[] result = orderingService.bubbleSort(vector);

        printingService.printVector(result);
    }
}
