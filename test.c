#include<stdio.h>
int main(){
    int firstNumber, secondNumber;

    printf("Enter two numbers: ");
    scanf("%d %d", &firstNumber, &secondNumber);
    printf("Sum: %d\n", firstNumber + secondNumber);

    return 0;
}