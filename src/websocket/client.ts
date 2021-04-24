import { io } from '../http';
import { ConnectionService } from '../services/ConnectionService';
import { MessagesService } from '../services/MessagesService';
import { UserService } from '../services/UserService';

interface IParams {
  text: string;
  email: string;
}


io.on("connect", (socket) => {
  const connectionService = new ConnectionService();
  const userService =new UserService();
  const messagesService = new MessagesService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;
    let user_id = null;

    const userExists = await userService.findByEmail(email);

    if(!userExists) {
      const user = await userService.create(email);

      await connectionService.create({
        user_id: user.id,
        socket_id
      })

      user_id = user.id;
    }else {
      user_id = userExists.id
      const connection = await connectionService.findByUserId(userExists.id);

      if(!connection) {
        await connectionService.create({
          user_id: userExists.id,
          socket_id
        })
      } else {
        connection.socket_id = socket_id;
        await connectionService.create(connection);
      }      
    }

    await messagesService.create({
      text,
      user_id
    })

  });
});