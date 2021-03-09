'use strict';
function StudentInfo(info){
  this.info;

}
StudentInfo.prototype.addEle = function ( email ,mobile,tuition){
  const newInfo = new StudentInfo (email ,mobile,tuition);
  this.info.push(newInfo);
};
StudentInfo.prototype.addToLocalStorage = function() {
  localStorage.setItem(StudentInfo),JSON.stringify(this.info);
};

const tBody = document.getElementById(table);
for (let i =0 < ; i++ ){

}

function addEle(email ,mobile,tuition){
    const newInfo = Document.getElementById()



}