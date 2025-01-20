def array_plus_array(arr1,arr2):
    jami = 0
    for i in arr1:
        jami += i
    for i in arr2:
        jami += i
    return jami



def say_hello(name):
    
    return "Hello, "+ name

def monkey_count(n):
    num=[]
    for i in range(1, n+1):
        num.append(i)
    return num  