import Image from "next/image";

export default function RoomCard({ room }) {
  return (
    <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden group">
      <div className="overflow-hidden rounded-t-2xl">
        <Image
          src={room.image}
          alt={room.title}
          width={500}
          height={300}
          className="transform group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-black">{room.title}</h2>
        <p className="text-gray-600 mb-3">Ideal for {room.capacity}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            PKR {room.price}
          </span>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
