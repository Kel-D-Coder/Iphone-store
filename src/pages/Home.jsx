import { phones } from "../Data";
import { Phone } from "../components/Phone";

export const Home = () => {

  return (
    <>
      <h1 className="font-bold text-4xl text-center mt-10">Iphone Store</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {phones.map((phone, i) => (
          <Phone phone={phone} key={i}/>
        ))}
      </div>
    </>
  );
};
