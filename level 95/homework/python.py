year = int(input('enter year and we will tell you if it is leap year or not'))
if (year%4 == 0 and year%100==0) or year%400==0:
    print('year '+str(year)+" is leap year")
else:
    print('year '+str(year)+" is not leap year")

    