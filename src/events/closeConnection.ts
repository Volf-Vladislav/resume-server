import Ws from '../types/Ws'
import Wss from '../types/Wss'

const closeConnection = (wss: Wss, ws: Ws) => {
    wss.clients.forEach((client: any) => {
        if (client.seekingID == ws.id && ws.id != client.id) {
            
        }
    })
}


export default closeConnection