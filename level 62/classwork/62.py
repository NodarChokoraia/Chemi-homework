def create_array(n):
    res=[]
    for i in range(1,n+1):
        res.append(i)
        
    return res


def grow(arr):
    i  = 1
    for e in arr:
        i*=e
        
        
        
    return i


def switch_it_up(n):
    if n==0:
        return "Zero"
    elif n==1:
        return "One"
    elif n==2:
        return "Two"
    elif n==3:
        return "Three"
    elif n==4:
        return "Four"
    elif n==5:
        return "Five"
    elif n==6:
        return "Six"
    elif n==7:
        return "Seven"
    elif n==8:
        return "Eight"
    elif n==9:
        return "Nine"