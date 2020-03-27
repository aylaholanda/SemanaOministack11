const conn = require ('../database/conn')

module.exports = {
    async index (request , response){
        const ong_id = request.headers.authorization;
        const ongs = await conn('incidents').where('ong_id',ong_id).select('*');
        return response.json(ongs);
    }
}