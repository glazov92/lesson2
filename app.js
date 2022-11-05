let age;
const gender = "жЕн";

if (age > 18) {
  console.log("Вам больше 18 лет");
} else if (age < 18) {
  console.log("Вам меньше 18 лет");
} else if (typeof (age) == "undefined") {
  console.log("Введите ваш возраст");
} else {
  console.log("Уже можно");
}

if (gender.toLocaleLowerCase() === "муж") {
  console.log("Вам налево");
}
if (gender.toLocaleLowerCase() === "жен") {
  console.log("Вам направо");
}
