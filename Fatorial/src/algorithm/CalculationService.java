package algorithm;

public class CalculationService {

    public int calculaFatorial(int var1){
        int fatorial = 1;

        if (var1 == 0){
            return 1;
        }

        for (int i = 1;i <= var1 ; i ++ ) {
            fatorial *= i;
        }
        return fatorial;
    }
}
