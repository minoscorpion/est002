// Função para misturar valores de um vetor
const shuffleArray = array => {
    const shuffledArray = [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  };

  // Função para o algoritmo Bubble Sort
  const bubbleSort = array => {
    const n = array.length;
    const retorno = [...array];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) 
        {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return retorno;
  };

  // Função para o algoritmo Selection Sort
  const selectionSort = array => {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  };

  // Função de particionamento para o Quick Sort
  const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  };

  // Função para o algoritmo Quick Sort
  const quickSort = (array, low, high) => {
    if (low < high) {
      const pivotIndex = partition(array, low, high);

      quickSort(array, low, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, high);
    }
  };