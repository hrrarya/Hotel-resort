import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "../components/Room";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />

        <div className="featured-rooms-center">
          {loading ? "loading..." : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
