import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive updates about new items and special offers.",
    });
    setEmail("");
  };

  return (
    <div className="bg-primary/30 py-12 px-4">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="font-serif text-3xl mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to get notified about new items and special offers!
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-secondary hover:bg-secondary/80">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};