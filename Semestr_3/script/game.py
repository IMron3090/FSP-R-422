import random

# Словарь с английскими словами и их переводом
vocabulary = {
    "apple": "яблоко",
    "cat": "кот",
    "dog": "собака",
    "sun": "солнце",
    "book": "книга",
    "airplane": "самолёт",
    "bottle": "бутылка",
    "board": "доска",
    "desk": "парта",
    "table": "стол",
    "camp": "лагерь",
    "fire": "огонь",
    "chair": "стул",
    "diet": "диета",
    "enemy": "враг",
    "danger": "опасность",
    "safe": "безопасность",
    "grass": "трава",
    "moon": "луна",
}

# Функция для выбора случайного слова из словаря
def generate_word():
    word = random.choice(list(vocabulary.keys()))
    translation = vocabulary[word]
    return word, translation

# Основной цикл работы бота
while True:
    # Генерация случайного слова и его перевод
    word, translation = generate_word()
    
    # Вывод слова и запрос перевода от пользователя
    print("Word:", word)
    user_translation = input("Translation: ")
    
    # Проверка правильности перевода
    if user_translation.lower() == translation.lower():
        print("Correct!")
    else:
        print("Incorrect. The correct translation is:", translation)
    
    # Запрос на продолжение или завершение работы
    choice = input("Continue? (yes or no): ").lower()
    if choice != "yes":
        break