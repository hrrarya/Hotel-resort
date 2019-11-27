import React, { Component } from "react";
import Banner from "../components/banner";
import StyleHero from "../components/simpleStyle";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

class SingleRoom extends Component {
  state = {
    slug: ""
  };

  componentDidMount() {
    this.setState({ slug: this.props.match.params.slug });
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h6>no such room found</h6>
          <Link to="/rooms" className="btn-primary">
            go back rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
      <>
        <StyleHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              go back rooms
            </Link>
          </Banner>
        </StyleHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>Price : ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} People` : `${capacity} Person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
