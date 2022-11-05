let age = 0;

age = +age;

if(!isNaN(age)) {
    if (age > 18) {
        console.log("Вам больше 18 лет");
      } else if (age < 18) {
        console.log("Вам меньше 18 лет");
      } else if (age === 18) {
        console.log("Уже можно");
      } else {
        console.log("Введите ваш возраст");
      }
} else {
    console.log('Введите корректные данные');
}
const gender = "жЕн";

if (age > 18) {
  console.log("Вам больше 18 лет");
} else if (age < 18) {
  console.log("Вам меньше 18 лет");
} else if (age === 18) {
  console.log("Уже можно");
} else {
  console.log("Введите ваш возраст");
}

if (gender.toLocaleLowerCase() === "муж") {
  console.log("Вам налево");
}
if (gender.toLocaleLowerCase() === "жен") {
  console.log("Вам направо");
}
