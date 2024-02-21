""" 
    Titulo: Calculadora simples utilizando loop while
    Autor: Breno D. Chrispim
    Descrição: Programa para calcular as quatro operações matematicas básicas (soma, subtração, multiplicação e divisão) de dois numeros.
    Retorna zero caso a operação não esteja listada ou a divisão seja por zero. Também inclui prompt básico.
"""

# Mensage inicial
hello_message = """ 
    Olá!\n                
    Esse programa é uma calculadora simples.\n
    """

# Mensage prompt para escolha da opção
ask_what_to_do = """ 
    Qual operação você deseja realizar?
    1: Soma
    2: Subtração
    3: Multiplicação
    4: Divisão
    0: Sair
    """

# Definição das funções


def funcao_calculadora_simples(a, b, operacao):
    """ 
    Description: Função que calcula a operação (soma, subtração, multiplicação ou divisão) entre dois números
    Input:
        a: int
        b: int
        operacao: string (soma, subtração, multiplicação ou divisão)
    Saida:
        valor: number (int ou float dependendo da escolha de a e b)
    """

    # Valor inicial
    valor = 0

    # Escolha da operação
    if operacao.lower() == "soma":
        valor = a + b

    elif operacao.lower() == "subtracao":
        valor = a - b

    elif operacao.lower() == "multiplicacao":
        valor = a * b

    elif operacao.lower() == "divisao":
        if b == 0:                              # Caso onde a divisão não é possivel
            print("Not possible.")
            return 0

        else:
            valor = a / b

    return valor

# Função que pergunta os números ao usuario


def aks_values():
    """ 
    Description: Função que pergunta ao usuario dois valores numericos. Verifica se eles são inteiros
    Input:
        a: input
        b: input
    Saida:
        a,b : int
    """

    try:
        a = int(input("Qual o primeiro valor?"))
        b = int(input("Qual o segundo valor?"))

    except ValueError:
        print("Por favor insira um número inteiro.")

    return a, b


# Função principal
if __name__ == "__main__":

    # Variavel de controle de loop
    on = True

    # Mostra a mensagem inicial
    print(hello_message)

    # Loop principal
    while on:
        try:
            # Mostra escolhas
            number = int(input(ask_what_to_do))

        except ValueError:
            print("Essa opção não existe")

        # Opções de operações
        if number == 1:  # Soma
            a, b = aks_values()
            resultado = funcao_calculadora_simples(a, b, "soma")
            print(f"{a} + {b} = {resultado}")
        elif number == 2:  # Subtração
            a, b = aks_values()
            resultado = funcao_calculadora_simples(a, b, "subtracao")
            print(f"{a} - {b} = {resultado}")
        elif number == 3:  # Multiplicação
            a, b = aks_values()
            resultado = funcao_calculadora_simples(a, b, "multiplicacao")
            print(f"{a} x {b} = {resultado}")
        elif number == 4:  # Divisão
            a, b = aks_values()
            resultado = funcao_calculadora_simples(a, b, "divisao")
            print(f"{a} x {b} = {resultado}")
        elif number == 0:  # Sair
            print("Adeus!")
            on = False
        else:
            # Mensagem caso opção não exista
            print("Essa opção não existe")
