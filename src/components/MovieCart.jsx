import Rating from "./Rating";

const MovieCart = ({ movie }) => {
  const { cover, title, genre, rating, price } = movie;
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <img className="w-full h-96 object-cover" src={cover} alt={title} />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
        <div className="flex items-center space-x-1 mb-5">
          <Rating value={rating} />
        </div>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="/"
        >
          <span>{`$${price} | Add to Cart`} </span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCart;
