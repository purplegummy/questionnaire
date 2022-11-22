import React from 'react'
import { trpc } from '../utils/trpc';

const Create = () => {
  
  const [input, setInput] = React.useState("");
  const [name, setName] = React.useState("");
  const room = trpc.useMutation(["rooms.createRoom"]);
  const member = trpc.useMutation(["rooms.createMember"]);
  return (
    <div>
        <form className="flex flex-col"onSubmit={(e) => {
            e.preventDefault();
            // create a room
             room.mutateAsync({
                question: input
            });
            const newRoom = room.data;
           
            console.log(newRoom)
            if (newRoom){
              console.log("HEREEEEEE")
              member.mutateAsync({
                    name,
                    roomId: newRoom.id,
                    isHost: true,

                    
              });

            }
          
         


        }}>
            <input placeholder="Your Room Question" onChange={(e) => setInput(e.target.value)} value={input} type="text"/>
            <input placeholder="Username" onChange={(e) => setName(e.target.value)} value={name} type="text"/>
            
            <input type="submit" value="Create Room"/>
        </form>
            
    </div>
  )
}

export default Create;
