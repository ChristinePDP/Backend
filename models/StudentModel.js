import pool from '../config/db.js';

export const getStudent = async () => {
  const [rows] = await pool.query("SELECT * FROM tblstudent"); //frm database
  return rows; //eto yung ibabalik sa controller
};

//insert
export const insertStudent = async (name, srcode, course) => {
  const [result] = await pool.query (
    "INSERT INTO tblstudent(name, srcode, course) VALUES (?,?,?)", 
    [name, srcode, course]
  );
  return result.insertId;
}

//update
export const updateStudent = async (name, srcode, course, studentId) => {
  const [result] = await pool.query (
    "UPDATE tblstudent SET name= ?, srcode= ?, course= ? WHERE id= ? ",
    [name, srcode, course, studentId]
  );
  return result.affectedRows;
}

//delete
export const deleteStudent = async (studentId) => {
  const [result] = await pool.query (
    "DELETE FROM tblstudent WHERE id= ?", [studentId]
  );
  return result.affectedRows
}