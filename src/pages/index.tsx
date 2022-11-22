import type { NextPage } from "next";
import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
const Home = () => {
  const [roomID, setRoomID] = useState("");
  const router = useRouter()
 
  return (
    <div className="flex flex-col">
      <Head>
        <title>Poll Rooms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/create">
        Create A Room!
      </Link>
      <form onSubmit={(e) => {e.preventDefault(); router.push('/rooms/'+roomID)}}>
        <input value={roomID} onChange={(e) => setRoomID(e.target.value)} type="text"/>
        <input type="submit" value="Join"/>
      </form>
      
    </div>
  );
};

export default Home;