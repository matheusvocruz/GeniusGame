const mongooose = require('mongoose');

const RankingSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    ranking: {
        type: Number,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    dt_created: {
        type: Date,
        default: Date.now
    }
});

mongooose.model('Ranking', RankingSchema);