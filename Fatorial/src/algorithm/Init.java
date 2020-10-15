package algorithm;

public class Init {

    public static void main(String[] args) {
        int number = 5;

        CalculationService calculationService = new CalculationService();
        int result = calculationService.calculaFatorial(number);
        System.out.printf("O fatorial de %d é igual a %d", number, result);
    }
}
