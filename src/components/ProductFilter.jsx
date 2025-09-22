import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

const ProductFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap gap-2 mb-8"
    >
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="transition-all duration-300"
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductFilter;