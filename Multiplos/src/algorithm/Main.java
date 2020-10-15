package algorithm;

public class Main {

    public static void main(String[] args) {

        int var1 = 3;
        int var2 = 5;
        int limiter = 100;

        CalculationService calculationService = new CalculationService();
        int result = calculationService.sumOfMultiples(var1, var2, limiter);
        System.out.printf("A soma dos multiplos de %d e %d abaixo de %d é %d", var1, var2, limiter, result);
    }
}
