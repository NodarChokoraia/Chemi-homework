#code wars

#1)
def positive_sum(arr):
    sum = 0
    for e in arr:
        if e > 0:
            sum = sum + e
    return sum

#############################################



#2)
def summation(num):
    return (1+num) * num / 2

#############################################



#3)

def greet(language):
  if language=='english':
    return('Welcome')
  elif language=='czech':
    return('Vitejte')
  elif language=='danish':
    return('Velkomst')
  elif language=='dutch':
    return ('Welkom')
  elif language=='estonian':
    return('Tere tulemast')
  elif language=='finnish':
    return('Tervetuloa')
  elif language=='flemish':
    return('Welgekomen')
  elif language=='french':
    return('Bienvenue')
  elif language=='german':
    return('Willkommen')
  elif language=='irish':
    return('Failte')
  elif language=='italian':
    return('Benvenuto')
  elif language=='latvian':
    return ('Gaidits')
  elif language=='lithuanian':
    return ('Laukiamas')
  elif language=='polish':
    return ('Witamy')
  elif language=='spanish':
    return('Bienvenido')
  elif language=='swedish':
    return('Valkommen')
  elif language=='welsh':
    return('Croeso')
  else:
    return('Welcome')