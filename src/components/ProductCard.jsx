import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartAtoms";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductCard = ({ product, index }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = () => {
    const existingItem = cart.find(item => item._id === product._id);

    if (existingItem) {
      setCart(cart.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.name} added to cart!`, {
      description: `$${product.price.toFixed(2)}`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-xl shadow-product hover:shadow-glow transition-all duration-300 overflow-hidden border border-border/50"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />

        {/* Wishlist Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full shadow-md hover:bg-background transition-colors"
        >
          <Heart className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <motion.h3
          className="text-lg font-semibold text-card-foreground mb-2 line-clamp-1"
          whileHover={{ color: "hsl(var(--primary))" }}
        >
          {product.name}
        </motion.h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
            <span className="text-2xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="cart" size="sm" onClick={addToCart} className="group/btn">
              <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:rotate-12" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
