package algorithm;

public class CalculationService {

    public int sumOfMultiples(int var1, int var2, int limiter){
        int result = 0;
        for(int i = 0; i < limiter; i++){
            if(i % var1 == 0 || i % var2 == 0){
                result += i;
            }
        }
        return result;
    }
}
