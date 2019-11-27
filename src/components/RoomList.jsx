import React from "react";
import Room from "./Room";

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matches your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
};

export default RoomList;
