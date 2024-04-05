// 5.	Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro e Gato que herdam de Animal e implementam o método emitirSom de forma diferente para cada classe.
class Animal {
    emitirSom() {
      console.log("Som genérico de um animal do Black Clover.");
    }
  
    correr() {
      console.log("O animal está correndo.");
    }
  }
  

  class Burro extends Animal {
    emitirSom() {
      console.log("Fala do burro do Black Clover: JS não precisa de ; igual python!");
    }
  }
  

  class Dragão extends Animal {
    emitirSom() {
      console.log("Bafo de Fogo do Black Clover: xupa que é de uva!");
    }
  }

  const burro = new Burro();
  const dragão = new Dragão();
  
  burro.emitirSom(); // Saída: Latido de cachorro do Black Clover: Woof Woof!
  burro.correr();    // Saída: O animal está correndo.
  
  dragão.emitirSom();     // Saída: Miado de gato do Black Clover: Meow Meow!
  dragão.correr();        // Saída: O animal está correndo.
  