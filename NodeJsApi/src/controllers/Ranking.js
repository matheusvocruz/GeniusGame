const mongooose = require('mongoose');
const Ranking = mongooose.model('Ranking');

const errorMsg = 'Error';
const successMsg = 'Success';

module.exports = {
    async index(req, res) {
        const rankings = await Ranking.find().sort({ranking: 'descending'}).limit(10);

        return res.json(rankings);
    },
    async visualization(req, res) {
        try {
            const ranking = await Ranking.findById(req.params.id);

            return res.json(ranking);
        } catch (err) {
            return res.send(err.body);
        }
    },
    async create(req, res) {
        try {
            const ranking = await Ranking.create(req.body);

            return res.send(successMsg);
        } catch (err) {
            return res.send(errorMsg);
        }
    },
    async update(req, res) {
        try {
            const ranking = await Ranking.findByIdAndUpdate(req.params.id, req.body, { new: true });

            return res.send(successMsg);
        } catch (err) {
            return res.send(errorMsg);
        }
    },
    async delete(req, res) {
        try {
            const ranking = await Ranking.findByIdAndDelete(req.params.id);

            return res.send(successMsg);
        } catch (err) {
            return res.send(errorMsg);
        }
    }
};