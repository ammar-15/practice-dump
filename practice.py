#remove duplicates from a list in python
def dupArr(x):
    newArr = []
    for num in x:
        if num not in newArr:
            newArr.append(num)
    return newArr

x = [3, 4, 5, 4, 3, 2]
print(dupArr(x))