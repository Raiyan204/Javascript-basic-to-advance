function person(name, dept, semester, skills)
{
    this.name = name;
    this.dept = dept;
    this.semester = semester;
    this.skills = skills;
}
let Raiyan = new person("Raiyan", "CSE", 6, ["JavaScript", "Python", "C++"]);
console.log(Raiyan.name);
console.log(Raiyan.dept);
console.log(Raiyan.semester);
console.log(Raiyan.skills.join(", "));
Raiyan.describe = function() {
    return `${this.name} is a student of ${this.dept} department, currently in semester ${this.semester}. He has skills in ${this.skills.join(", ")}.`;
}
console.log(Raiyan.describe());
let {name ,semester} = Raiyan;
console.log(name, semester);
let RaiyanJSON = JSON.stringify(Raiyan);
console.log(RaiyanJSON);
let RaiyanObj = JSON.parse(RaiyanJSON);
console.log(RaiyanObj);