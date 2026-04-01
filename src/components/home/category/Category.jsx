import { CategoryData } from "../../../api/catagorydata";
import Container from "../../ui/Container";
import Card from "./card";

const Category = () => {
  return (
    <section className="mt-25.25">
      <Container>
        <div className="grid-row-2 grid grid-cols-4 gap-7.5">
          {CategoryData?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
