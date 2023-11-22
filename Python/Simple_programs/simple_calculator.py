""" 
    Titulo: Calculadora simples
    Autor: Breno D. Chrispim
    Descrição: Programa para calcular as quatro operações matematicas básicas (soma, subtração, multiplicação e divisão) de dois numeros.
    Retorna zero caso a operação não esteja listada ou a divisão seja por zero.
"""

# Definição das funções

def funcao_calculadora_simples(a, b, operacao):
    valor = 0
    if operacao.lower() == "soma":
        valor = a + b
    elif operacao.lower() == "subtracao":
        valor = a - b
    elif operacao.lower() == "multiplicacao":
        valor = a * b
    elif operacao.lower() == "divisao":
        if b == 0:
            print("Not possible.")
            return 0
        else:
            valor = a / b
    return valor

# Teste de função
if __name__ == "__main__":
    
    # Importa pacote de números randomicos
    import random

    # Define os números que serão testados
    a = random_number = random.randint(1, 10)
    b = random_number = random.randint(1, 10)

    # Define os valores esperados
    valores_corretos = [a + b, a - b, a * b, a / b, 0]

    # Define as operações que vão ser testadas
    operacoes = ["soma", "subtracao", "multiplicacao", "divisao", "operacao_invalida"]

    # Cria um objeto iteravel 
    zipped = zip(operacoes, valores_corretos)

    for operacao, valor_correto in zipped:
        func_output = funcao_calculadora_simples(a, b, operacao)
        print(f"funcao_calculadora_simples({a},{b},{operacao}) = {func_output}. (valor correto {valor_correto})")