import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="beliefs" className="lg:px-52 pt-14">
      <h1 className="heading mb-10 ">
        My <span className="text-purple">Beliefs</span> and
        <span className="text-purple"> Values</span>
      </h1>

      <BentoGrid className="w-full pt-0 pb-0">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
