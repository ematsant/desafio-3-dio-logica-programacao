# Hero Attack System

Um projeto simples para o curso de lógica de programação da DIO que demonstra o uso de classes e métodos em JavaScript, criando um sistema de ataque de heróis com diferentes tipos de habilidades.

## 📋 Descrição

Este projeto implementa uma classe `Hero` que representa diferentes tipos de heróis (mago, guerreiro, monge e ninja), cada um com sua própria forma de ataque. O sistema instantia vários heróis e exibe suas ações de combate.

## 🎮 Tipos de Heróis

- **Mage** (Mago): Ataca usando magia
- **Warrior** (Guerreiro): Ataca com uma espada
- **Monk** (Monge): Ataca com artes marciais
- **Ninja**: Ataca com uma estrela ninja (shuriken)

## 🚀 Como Usar

### Requisitos
- Node.js instalado no seu computador

### Executar o Código

```bash
node index.js
```

### Saída Esperada

```
***Start***

The mage attacked using magic.
The warrior attacked using a sword.
The monk attacked using martial arts.
The ninja attacked using a shuriken.

***End***
```

## 📝 Estrutura do Código

### Classe Hero

```javascript
class Hero {
    constructor(name, age, type)
    attack()
}
```

**Propriedades:**
- `name`: Nome do herói
- `age`: Idade do herói
- `type`: Tipo do herói (mage, warrior, monk, ninja)

**Métodos:**
- `attack()`: Exibe a ação de ataque do herói baseado em seu tipo

## 💡 Exemplo de Uso

```javascript
const hero = new Hero("Merlin", 100, "mage");
hero.attack(); // The mage attacked using magic.
```

## 🛠️ Tecnologias

- JavaScript (ES6+)
- Classes e Switch Case

## 📚 Conceitos Abordados

- Programação Orientada a Objetos (POO)
- Classes e Construtores
- Métodos
- Switch Case
- Iteração com for...of
- Array de objetos

## 👨‍💻 Autor

Desenvolvido como parte do desafio de lógica de programação da DIO (Digital Innovation One)

---

**Versão:** 1.0  
**Data:** Maio de 2026
