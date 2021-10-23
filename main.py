#Takes lenght of password, special charcarthers (1 = yes, 0 = no) and numbers in password (1 = yes, 0 = no). Requires randint from random library to be callable.

def pass_phrase(lenght, special_characters, numbers_in_password):
    password = []
    if special_characters == 1 and numbers_in_password == 1:
        for i in range(lenght):
            password.append(randint(33, 126))
    elif special_characters == 0 and numbers_in_password == 1:
        for i in range(lenght):
            rand = randint(48, 122)
            if 58 <= rand <= 64: 
                continue
            elif 91 <= rand <= 96: 
                continue
            password.append(rand)
    elif special_characters == 1 and numbers_in_password == 0: 
        for i in range(lenght):
            rand = randint(33, 125)
            if 48 <= rand <= 57:
                continue
            password.append(rand)
    elif special_characters == 0 and numbers_in_password == 0:
        for i in range(lenght):
            rand = randint(65, 122)
            if 91 <= rand <= 96:
                continue
            password.append(rand)
    for i in range(lenght):
        uniqe_password = "".join([chr(value) for value in password])
    return uniqe_password


