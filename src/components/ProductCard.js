import { Card, Image, Text, Group } from "@mantine/core";
import UpvoteButton from "./UpVoteButton";

const ProductCard = ({ product }) => {
  return (
    <Card shadow="sm" padding="lg" className="mb-4 flex flex-row justify-between items-center">
      <Group position="apart">
        <Image src={product.image} alt={product.name} width={60} height={60} />
        <Group>
          <Text weight={500} className="mt-2">
            {product.name}
          </Text>
          <Text size="sm" color="dimmed">
            {product.description}
          </Text>
        </Group>
      </Group>
      
      <UpvoteButton />
    </Card>
  );
};

export default ProductCard;
