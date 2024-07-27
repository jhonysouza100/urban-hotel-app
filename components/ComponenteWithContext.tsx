"use client"
import { useEffect } from "react";
import { store } from "@/context";

export default function Suscription() {
  
  // const { count, username } = store();

  const count = store((state) => state.count);
  const username = store((state) => state.username);

  const state = store((state) => ({
    nombre: state.username,
    countador: state.count,
  }))

  // const increment = store(state => state.increment);
  const {increment, getPosts, posts, clearStore, multiply} = store();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      Suscription {username} : {count}
      <button className="bg-blue-500 rounded-md m-2 p-2" onClick={() => increment(10)}>Increment</button>
      <button className="bg-red-500 rounded-md m-2 p-2" onClick={() => clearStore()}>Clear Store</button>
      <button className="bg-green-500 rounded-md m-2 p-2" onClick={() => multiply()}>Multiply</button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  )
}