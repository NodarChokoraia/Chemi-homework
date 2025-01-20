def simple_multiplication(number) :
    if number % 2 == 0:
        return number*8
    
    else:
        return number*9
    

def check_alive(health):
    if health < 0 or health == 0:
        return False
   
    else:
        return True
    

def triangular(n):
    if n<=0:         
        return 0
    return n * (n+1) // 2


def positive_sum(arr):
    sum = 0
    for i in arr:
        if i >0:       
            sum=sum+i
        
        
    return sum
            