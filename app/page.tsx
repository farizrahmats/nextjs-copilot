import ShoppingList from "@/components/ShoppingList";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-(--background) px-4 py-16 text-(--foreground) transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">ShopaShop</h1>
        <p className="mt-2 text-sm">Keep track of everything you need to buy.</p>
      </div>
      <ShoppingList />
    </main>
  );
}
