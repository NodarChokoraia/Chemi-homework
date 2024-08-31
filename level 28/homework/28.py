underweight = ("less than 18.5")
normal =("more or equal to 18.5 and less than 25")
Overweight =("more or equal to 25 and less than 30")
obesity =("30 or more")


yourweight = int(input("What your Weight:"))
yourheight = int(input("what is your Age:"))

bmi = yourweight /(yourheight*2)

if bmi < 18.5:
    print("underweight")




elif  bmi < 25:
    print("normal")





elif bmi < 30 :
    print("Overweight")

else  :
    print("obesity")













