count_items = [1,2,3,4,5,6,7,8,2,2,2]


print(count_items.count(2))

averge_of_lists = [1,2,3,4,5,6,7,8,9,0]
print(sum(averge_of_lists)/ len(averge_of_lists))

reverse_list = [1,2,3,4,5,6,7,8,9,0]

reverse_list.reverse()

reverse_list.remove(1)
reverse_list.insert(0,1)
reverse_list.remove(0)
reverse_list.insert(10,0)
print(reverse_list)