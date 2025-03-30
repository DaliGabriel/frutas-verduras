import Image from "next/image";

const products = [
  {
    name: "Plátano",
    price: "$12/kg",
    image: "/banana.jpg",
    whatsapp: "https://wa.me/5213312345678?text=Quiero%202kg%20de%20plátano",
  },
  {
    name: "Manzana Roja",
    price: "$18/kg",
    image: "/apple.jpg",
    whatsapp:
      "https://wa.me/5213312345678?text=Quiero%201kg%20de%20manzana%20roja",
  },
  {
    name: "Piña Miel",
    price: "$25 c/u",
    image: "/pineaple.jpg",
    whatsapp: "https://wa.me/5213312345678?text=Quiero%20una%20piña%20miel",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Frutas Doña Lupita
        </h1>
        <p className="text-center sm:text-left">
          Frutas y Verduras Frescas a Tu Puerta en Guadalajara
        </p>
        <a
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          href="https://wa.me/5213312345678?text=Hola%2C%20quiero%20ordenar%20frutas%20y%20verduras%20frescas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ordenar por WhatsApp
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="border p-4 rounded shadow text-center"
            >
              <div className="relative w-full h-[200px] mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="mb-2">{product.price}</p>
              <a
                className="bg-green-500 text-white px-3 py-1 rounded"
                href={product.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded w-full max-w-2xl mt-12">
          <h2 className="text-xl font-bold mb-4">Información de la Tienda</h2>
          <p>
            <strong>Dirección:</strong> Av. Juárez 123, Guadalajara, Jalisco
          </p>
          <p>
            <strong>Teléfono:</strong> (33) 1234-5678
          </p>
          <p>
            <strong>Horario:</strong> Lunes a Sábado de 8 a.m. a 6 p.m.
          </p>
          <p>
            <strong>Métodos de pago:</strong> Efectivo, Transferencia, Contra
            Entrega
          </p>
          <a
            className="mt-4 inline-block bg-green-500 text-white font-bold py-2 px-4 rounded"
            href="https://wa.me/5213312345678?text=Hola%2C%20quiero%20ordenar%20productos%20de%20la%20frutería"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ordenar Ahora
          </a>
        </div>
      </main>
    </div>
  );
}
