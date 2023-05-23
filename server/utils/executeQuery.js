import connection from "../config/connection.js";

const executeQuery = (sql_query, parameters) => {
  const promise = new Promise((resolve, reject) => {
    connection.query(sql_query, parameters, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return promise;
};

export default executeQuery;
