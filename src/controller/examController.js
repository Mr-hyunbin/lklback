import db from "../db/db";

export const allu = async (p) => {
	let result;

	try {
		result = await db.list("exam", "exex", p);
	} catch (error) {
		throw error;
	}
	return result;
};

module.exports = { allu };
