// js/config.js
export const members = [
  {
    progroId: "PG001",
    name: "山田 太郎",
    icon: "images/icons/user1.png",
    role: "student", // student | alumni | teacher
    link: "profile/yamada.html"
  },
  {
    progroId: "PG002",
    name: "佐藤 花子",
    icon: "images/icons/user2.png",
    role: "student",
    link: "profile/sato.html"
  },
  {
    progroId: "PG101",
    name: "鈴木 一郎",
    icon: "images/icons/user3.png",
    role: "alumni",
    link: "profile/suzuki.html"
  },
  {
    progroId: "PG201",
    name: "田中 先生",
    icon: "images/icons/teacher1.png",
    role: "teacher",
    link: "profile/tanaka.html"
  }
];

export const roleLabels = {
  student: "在籍生",
  alumni: "同窓生",
  teacher: "講師"
};
