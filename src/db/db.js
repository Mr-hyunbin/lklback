import mysql from "mysql2";
import config from "../../comfig/comfig";
import path from "path";
import mybatisMapper from "mybatis-mapper";

const exMapper = path.join(__dirname, "../mapper/mapper.xml");

mybatisMapper.createMapper([exMapper]);

const pool = mysql.createPool({
	host: config.db.host,
	port: config.db.port,
	user: config.db.user,
	password: config.db.password,
	database: config.db.database,
	waitForConnections: true,
	connectionLimit: 5,
});

const connection = pool.promise();

const list = async (nameSpace, sqlId, params) => {
	let conn, sql, result;

	try {
		conn = await connection.getConnection();
		sql = mybatisMapper.getStatement(nameSpace, sqlId, params, {
			language: "sql",
			indent: " ",
		});
		result = await conn.query(sql);
		console.log(result, " : result");
	} catch (error) {
		throw error;
	} finally {
		if (conn) conn.release();
	}

	return result[0];
};

module.exports = { list };

