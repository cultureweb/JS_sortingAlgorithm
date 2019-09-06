// Converts from degrees to radians.
Number.prototype.toRadians = function () {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
  let lat2 = Number(city.latitude);
  let lon2 = Number(city.longitude);
  let GrenobleLat = 45.166667;
  let GrenobleLong = 5.716667;

  let R = 6371e3; // metres
  let φ1 = GrenobleLat.toRadians();
  let φ2 = lat2.toRadians();
  let Δφ = (lat2 - GrenobleLat).toRadians();
  let Δλ = (lon2 - GrenobleLong).toRadians();

  let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let d = R * c;


  return d / 1000;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  let temp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = temp;

}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j) {
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  return csvData[i].dist < csvData[j].dist

}
function insertsort() {
  // console.log(csvData[0], csvData[1])
  // // swap(0, 1);
  // console.log(isLess(1, 0));
  // console.log(csvData[0], csvData[1])
  for (let i = 0; i < csvData.length; i++) {
    for (let j = i; j > 0 && isLess(j, j - 1); j--) {
      swap(j, j - 1)
    }
  }
  return csvData
}

function selectionsort() {
  for (let i = 0; i < csvData.length; i++) {
    let k = i;
    for (let j = i + 1; j < csvData.length; j++) {
      if (isLess(j, k)) {
        swap(i, j);
      }
    }
  }
  return csvData
}

function bubblesort() {
  // debugger
  for (let i = 0; i < csvData.length; i++) {
    for (let j = 0; j < csvData.length - (i + 1); j++) {
      if (isLess(j + 1, j)) {
        swap(j + 1, j);
      }
    }
  }
  return csvData
}



function shellsort() {
  console.log("shellsort - implement me !");
  //debugger
  // jusqu'à 700 données gap = 3 sinon sur mesure

  let gap = 701;
  //let gap = 3;

  while (gap < csvData.length) {
    gap = Math.round(gap * 2.3);
  }


  while (gap > 0) {
    for (let i = gap; i < csvData.length; i++) {
      for (let j = i; j >= gap && isLess(j, j - gap); j -= gap) {
        swap(j, j - gap)

      }
    }
    //gap = Math.floor(gap / 2)
    gap = Math.round(gap / 2.3)
  }
  return csvData

}

function mergesort(data = csvData) {
  console.log("data", data)
  //debugger

  let leftArray = [];
  let rightArray = [];
  let sortedArray = [];
  if (data.length > 1) {
    let middleIndex = Math.floor(data.length / 2);
    leftArray = data.slice(0, middleIndex);
    mergesort(leftArray)
    rightArray = data.slice(middleIndex, data.length);
    mergesort(rightArray)
  }
  for (let i = 0; i < leftArray.length; i++) {
    if (rightArray && leftArray) {
      for (let j = 0; j < rightArray.length; j++) {

        if (leftArray[i] < rightArray[j]) {
          sortedArray.push(rightArray)
          // rightArray.shift()
          console.log("rightArray", rightArray)
        }

        else {
          if (leftArray) {
            sortedArray.push(leftArray)
            //leftArray.shift()
            console.log("leftArray", leftArray)
          }
        }
      }
    }
  }
  return sortedArray

  // console.log("leftArray", leftArray);
  // console.log("rightArray", rightArray);
  // leftArray.concat(rightArray)
  // console.log("leftArray.concat(rightArray)", leftArray)

}

function heapsort() {
  console.log("heapsort - implement me !");
}

function quicksort(i = 0, j = csvData.length - 1) {
  //debugger
  //console.log('i: ', i, ' / j: ', j)
  let start = i;
  let end = j;
  let pivot = i;
  if (end - start > 0) {
    while (i !== j) {
      if (pivot === i) {
        if (isLess(j, pivot)) {
          swap(j, pivot)
          pivot = j;

        } else {
          j--;
        }
      } else {
        if (isLess(pivot, i)) {
          swap(i, pivot)
          pivot = i;
        }
        else {
          i++
        }
      }
    }
    quicksort(start, pivot - 1);
    quicksort(pivot + 1, end);
  }
}





function quick3sort() {
  console.log("quick3sort - implement me !");
}


function sort(algo) {
  switch (algo) {
    case 'insert': insertsort(); break;
    case 'select': selectionsort(); break;
    case 'bubble': bubblesort(); break;
    case 'shell': shellsort(); break;
    case 'merge': mergesort(); break;
    case 'heap': heapsort(); break;
    case 'quick': quicksort(); break;
    case 'quick3': quick3sort(); break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
