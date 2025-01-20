def reverse_seq(n):
    lst= []

    for i in range(1,n+1):    
        lst.append(i)
    lst.reverse()
    return lst

def string_to_number(s):
    return int(s)



def greet():
    return "hello world!"

def array_plus_array(arr1,arr2):
    jami = 0
    for i in arr1:
        jami += i
    for i in arr2:
        jami += i
    return jami