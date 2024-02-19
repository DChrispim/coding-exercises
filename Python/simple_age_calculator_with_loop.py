""" 
    Titulo: Calculadora de idade no ano 2022
    Autor: Breno D. Chrispim
    Descrição: Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
    A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).
    Caso o usuário não digite um número ou apareça um ano inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
"""

# Mensage inicial
hello_message = """ 
    Olá!\n                
    Esse programa calcula a sua idade no ano de 2022.\n
    """

# Definição das funções

def age_2022(year_birth):
    """ 
    Description: Calcula a idade do usuario no ano de 2022
    Input:
        year_birth: int
    Saida:
        age: int
    """

    # Definições
    ano_atual = 2022
    age = 2022 - year_birth

    return age

# Função que pergunta nome
def ask_name():
    """ 
    Description: Função que pergunta ao usuario o seu nome (string)
    Saida:
        name: string
    """
    name = input("Qual o seu nome completo?")

    if any(char.isdigit() for char in name):
        raise Exception("Isso não é um nome valido.")

    return name

# Função que pergunta ano de nascimento
def ask_date_birth():
    """ 
    Description: Função que pergunta ao usuario o seu ano de nascimento (int)
    Saida:
        date_birth: int
    """
    date_birth = input("Qual o seu ano de nascimento? (Valor entre 1922 (incluso) e 2021 (incluso))")

    if any(char.isalpha() for char in date_birth) or (int(date_birth) < 1922) or (int(date_birth) > 2022):
        raise Exception("Isso não é um ano válido.")

    return int(date_birth)

# Função principal
if __name__ == "__main__":
    
    # Variavel de controle de loop
    on = True

    # Mostra a mensagem inicial
    print(hello_message)

    # Loop principal
    while on:
        try:
            # Pergunta nome
            nome = str(ask_name())

            # Perguntar ano de nascimento e calcular idade
            year_birth = ask_date_birth()
            age = age_2022(year_birth)
            print(f"Nome: {nome}, idade em 2022: {age} anos")
        
            # Terminar execusão
            on = False
        except Exception as err:
            print("Ocorreu um erro")
            print(err)