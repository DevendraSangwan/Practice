# que-1
n = int(input("enter N: "))

# First part
for i in range(2):
    for j in range(1, n + 1):
        print(j, end=" ")
    print()

    for j in range(n, 0, -1):
        print(j, end=" ")
    print()

# Second part
for i in range(1, n + 1):
    if i == n:
        for j in range(1, n + 1):
            print(j, end=" ")
    else:
        print(1, end=" ")
        if i > 1:
            print("  " * (i - 2), end="")
            print(i, end="")
    print()

# que-2
def calculate_final_amount(amount):
    if amount < 1000:
        discount = 0
    elif amount < 5000:
        discount = 0.05
    elif amount < 10000:
        discount = 0.10
    else:
        discount = 0.15

    final_amount = amount - (amount * discount)

    return final_amount


amount = int(input("enter amount: "))
print(calculate_final_amount(amount))