


def even_numbers(arr,n):
    m = []
    
    for i in arr:
        if i%2 == 0:
            m.append(i)
            
    
    while len(m) != n:
        m.remove(m[0])
            
    
         
    return m