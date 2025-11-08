import pool from '../config/db.js';

export const getStudent = async () => {
  const [rows] = await pool.query("SELECT * FROM tblstudent"); //frm database
  return rows; //eto yung ibabalik sa controller
};