import React from 'react'
//import { useEffect , useState} from 'react';
import {trpc} from '../../utils/trpc';
import { useRouter } from 'next/router'


const Room = () => {
  const router = useRouter()
  const { id, loading, error } = router.query;
  console.log(loading)
  const room = trpc.useQuery(["rooms.getRoomById", {id: id as string}], {enabled:!!id});
  // gets members in rom
  //const membersInRoom = trpc.useQuery(["rooms.getMembersInRoom", {id: id as string}], {enabled:!!id});
    return (
        <>
        <div>
          {room && room.data && room.data.question}
        </div>

        </>
    )
   

    
 
}

export default Room;
