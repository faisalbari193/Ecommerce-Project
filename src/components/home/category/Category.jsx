import { CategoryData } from "../../../api/catagorydata";
import Container from "../../ui/Container";
import Card from "./card";

const Category = () => {
  return (
    <section className="mt-3.75 md:mt-25.25">
      <Container>
        <div className="md:grid-row-2 grid grid-rows-1 gap-3.75 md:grid-cols-4 md:gap-7.5">
          {CategoryData?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
