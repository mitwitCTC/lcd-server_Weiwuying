

module.exports = io => {

    return {
        Socket: (req, res) => {
            const CAR_DATA = req.body
            io.of('/deerRudolph').emit('getInfo', CAR_DATA)
            return res.json('ok')
        },

        Setting: (req, res) => {
            const SET_DATA = req.body

            // TODO 若SET_DATA需改寫

            io.of('/deerRudolph').emit('getSet', SET_DATA)
            return res.json('ok')
        }

    }
}