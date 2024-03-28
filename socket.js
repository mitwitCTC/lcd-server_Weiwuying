const fetch = require('node-fetch')
const SocketIO = require('socket.io')

const ip = 'localhost:5200'

module.exports = server => {
    const io = SocketIO(server)

    io.of('/deerRudolph').on('connection', async socket => {
        console.log('deerRudolph is on')
        // ['https://i.imgur.com/GmAPuSn.jpg']
        try {
            let fetch_result = await fetch(`http://${ip}/api/set`)
            let result_data = await fetch_result.json()
            console.log(result_data)
        } catch (error) {
            console.log({ error: 'getSet failed' })
        }
    })

    return io
}
