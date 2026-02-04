import e from "express";

let student = "Quý, Nam, Lan, Hùng, Nam";
if (input){
    let studentArray = student.split(",");
    let reversedStudentArray = studentArray.reverse();
}
//Phương thức có làm thay đôi mảng gốc
    for (let i = 0; i < studentArray.length; i++) {
        if (studentArray[i].trim() === "Lan") {
            console.log("Tìm thấy Lan tại vị trí thứ: " + i);
        }
        else {
            console.log("Tên Lan không tồn tại trong mảng");
        }
    }
    for (let i = 0; i< studentArray.length; i++){
        if (studentArray[i].trim() === "Nam"){
                console.log("Tìm thấy đầu tiên Nam tại vị trí thứ: " + i);
                break;
        }
    }
