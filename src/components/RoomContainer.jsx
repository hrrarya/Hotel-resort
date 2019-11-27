import React from "react";
import RoomFilter from "../components/RoomFilter";
import RoomList from "../components/RoomList";
import { withRoomConsumer } from "../context";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return "loading....";
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

