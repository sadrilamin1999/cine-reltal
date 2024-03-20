import Star from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img id={index} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
};

export default Rating;
